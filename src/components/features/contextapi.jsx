import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { contractabi, contractAddress } from "../contractinfo/contractdetails";
import { formatEther, parseEther } from 'ethers/lib/utils';
import { Injected } from "../Signup/Connectors";

const ContextAPI = createContext({});

export const useContextAPI = () => useContext(ContextAPI);

export const ContextAPIProvider = ({ children }) => {
  const { library, active, account, activate } = useWeb3React();

  const [signer, setSigner] = useState(null);
  const [connectedUser, setConnectedUser] = useState({uAddress: "", referrer: "", signedUp: false, yourUsers: []  });
  const [fetchedNfts, setFetchedNfts] = useState([]);


  const fetchcon = async () =>{
    
    const RPC = process.env.REACT_APP_RPC_ENDPOINT
    const provider = new ethers.providers.JsonRpcProvider(RPC);
    const con = await new ethers.Contract(contractAddress, contractabi, provider);
    return con
  }

  const LoggedInUserData = async () => {
    try {
      const con = await fetchcon()
      const connectedUserr = await con.UserDetails(account)
      setConnectedUser(connectedUserr)
      
    } catch (error) {
      console.log('eror', error);
    }
  }

  const fetchContractData = async () => {
    try {
      const con = await fetchcon()
      let fetchNFTsFromContract = await con.fetchListedNft()
      
      console.log(con);

      let arr = []

      for (let index = 0; index < fetchNFTsFromContract.length; index++) {
        const element = fetchNFTsFromContract[index];

        const id = await element.tokenId?.toString()
        const tokenURI = await con.tokenURI(id)
        const jsontoken = await tokenURI?.split('ipfs://')[1];

        const response = await fetch(`https://gateway.ipfs.io/ipfs/${jsontoken}`)
        const metadata = await response.json()


        const seller = element.seller
        const name = metadata.name
        const desc = metadata.description
        const image = metadata.image
        const price = formatEther(element.price?.toString()) 

        let obj = {
          tokenId: id, seller,name, desc, image, price
        }
        
        arr.push(obj)

      }

      setFetchedNfts(arr)

      
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    if(active){
      LoggedInUserData()
    }
  },[account])

  useMemo(() => {
    fetchContractData()
  },[])

  useMemo(() => {
    if (library !== undefined) {
      setSigner(library?.getSigner(account));
    }
  }, [account]);

  async function conToMetaMask() {
    if (typeof window.ethereum == "undefined") {
      alert("MetaMask is Not installed!");

    }else {
      try {
        await activate(Injected);


      } catch (error) {
        console.error('error');
        alert("error connected wallet")
        console.error(error);
      }
    }
  }

  return (
    <ContextAPI.Provider
      value={{
        conToMetaMask, library, fetchedNfts, connectedUser, setConnectedUser
      }}
    >
      {children}
    </ContextAPI.Provider>
  );
};
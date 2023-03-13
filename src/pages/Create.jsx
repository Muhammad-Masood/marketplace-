import { useWeb3React } from '@web3-react/core';
import axios from 'axios';
import { ethers } from 'ethers';
import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone';
import { Container, Row, Col } from "reactstrap";
import { contractabi, contractAddress } from '../components/contractinfo/contractdetails';
import CommonSection from '../components/ui/Common-section/CommonSection'
import Nftcard from '../components/ui/Live_auction/Nft-card/Nftcard';
import PreviewCard from '../components/ui/Live_auction/Nft-card/PreviewCard';

import styles from '../styles/create-item.css'


const cloudURL = "https://gateway.pinata.cloud";
const pinataOptions = {
  pinata_api_key: process.env.REACT_APP_IPFS_API_KEY,
  pinata_secret_api_key: process.env.REACT_APP_IPFS_API_SECRET,
};

const Create = () => {
  const {account, library} = useWeb3React()
  const [inputs, setInputs] = useState({
    desc: "",
    price: "",
    title: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  
  
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [selectedFile, setSelectedFile] = useState();

  const handleOnChange = (e) => {
    const {name, value} = e.target
    setInputs({
      ...inputs,
      [name]:value
    })
  }


  const handleFile = (e) => {
    if (e.target.files.length) {
      setSelectedFile(e.target.files[0]);
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  
  const uploadFile = async () => {
    try {
      if (selectedFile) {
        let sourceFormData = new FormData();
        sourceFormData.append("file", selectedFile);
  
        const sourceImage = await axios.post(
          "https://api.pinata.cloud/pinning/pinFileToIPFS",
          sourceFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              ...pinataOptions,
            },
          }
        );

        console.log(sourceImage);
  // https://gateway.pinata.cloud/
        return `${cloudURL}/ipfs/${sourceImage.data.IpfsHash}`
      }
  
      return null;
    } catch (error) {
      console.log("error --> ", error);
      return null;
    }
  };

  const onSubmit = async (e) => {
    setIsLoading(true)
    e.preventDefault()
    console.log('started');

    let { title, desc , price, } = inputs

    if(!account){
      setIsLoading(false)
      alert("you are not logged in")
      return 
    }
    if(!title || !desc || !price || !selectedFile){
      setIsLoading(false)
      alert("invalid inputs")
      return
    }

    
    try {
      const signer = library?.getSigner(account)
      const con = new ethers.Contract(contractAddress, contractabi, signer);

      const owner = await con.owner()
      console.log({owner});

      if(owner !== account){
      setIsLoading(false)
        alert("You are not owner")
        return
      }
      const URLforpinJSONtoIPFS = `https://api.pinata.cloud/pinning/pinJSONToIPFS`

      const ipfsimageurl = await uploadFile()

      console.log({ipfsimageurl});
      const res = await axios.post(URLforpinJSONtoIPFS,
        {
          name: title,
          description: desc,
          image: ipfsimageurl,
          attributes: [{ trait_type: "trait", value: 100, } ],
        },
        {
          headers: { 
            'Content-Type': 'application/json', 
            ...pinataOptions
          },
        }
      )
      const tokenURI = `ipfs://${res.data.IpfsHash}`;
      console.log({tokenURI});


      const tx = await con?.createItem(tokenURI, title, price, desc)
      await tx.wait()

        setIsLoading(false)
    } catch (error) {
        setIsLoading(false)
        console.log(error);      
    }

    
  }


  return <>
    <CommonSection title='Create Item' />
    <section>
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6'>
            <h5 className='mb-4'>Preview Item</h5>
            <PreviewCard inputs={inputs} image={image}/>
          </Col>

          <Col lg='9' md='8' sm='6'>
            <div className="create_item">
              <form onSubmit={onSubmit}>
                <div className="form-input">
                  <label htmlF=''>Upload File</label>
                  <input onChange={handleFile} type="file" name="file" className="upload-input" />
                </div>
                <div className="form-input">
                  <label htmlF=''>Price</label>
                  <input onChange={handleOnChange} type="text" name="price"  placeholder="Enter price for one item (Matic)" />
                </div>
                {/* <div className="form-input">
                  <label htmlF=''>Minimum Bid</label>
                  <input onChange={handleOnChange} type="number" name="minBid" placeholder="Enter Minimum Bid" />
                </div> */}
                <div className="form-input">
                  <label htmlF=''>Title</label>
                  <input onChange={handleOnChange} type="text"  name="title" placeholder='Enter title'   />
                </div>
                <div className="form-input">
                  <label htmlF=''>Description</label>
                  <textarea onChange={handleOnChange} name="desc" id=''  row='7' className='w-100' placeholder='Enter title'></textarea>
                </div>
                
                {isLoading ?
                <div className='btn btn-dark disabled'>processing...</div> :
                <button type='submit' className='btn btn-dark'>Submit</button>
                }
              </form>
              
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </>
}

export default Create
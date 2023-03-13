import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './nft-card.css'

import Modal from '../../Modal/Modal'
import { useWeb3React } from '@web3-react/core'
import { contractabi, contractAddress } from '../../../contractinfo/contractdetails'
import { ethers } from 'ethers'
import { parseEther } from 'ethers/lib/utils'
const Nftcard = (props) => {
    const [showModal, setshowModal] =useState(false)
    const {name,price,image,seller , tokenId}= props.item

    const {active, account , library} = useWeb3React()

    const purchaseItem = async () => {
        if(!active){
            alert("Conncet your wallet")
            return
        }
        try {
            const parseEtherrr = await parseEther(price)
            console.log({parseEtherrr: parseEtherrr?.toString()});

            console.log({tokenId});
            const signer = library?.getSigner(account)
            const con = await new ethers.Contract(contractAddress, contractabi, signer);
            console.log(price);
            const tx = await con.purchaseItem(tokenId, {value: parseEtherrr?.toString()+1})
            tx.wait()
        } catch (error) {
            alert(error.reason || error.message)
            console.log(error);
        }
  

    }

  return <div className="single_nft_card">
  <div className="nft_img">
      <img src={image} alt="" className='w-100'/>
  </div>

<div className="nft_content">
  <h5 className='nft_title text-light'>{name } {tokenId}</h5>
  <div className="creator_info_wrapper d-flex gap-3">

      <div className="creator_info w-100 d-flex align-items-center justify-content-between ">
          <div >
          <h6>Creator By</h6>
          <p>{seller?.slice(0,3)}...{seller?.slice(-3)}</p>
          </div>
          <div >
              <h6>Current Bid</h6>
              <p>{price} Matic</p>
          </div>
      </div>
  </div>
  <div className="mt-3 d-flex align-items-center justify-content-between">
      <button className='bid_btn d_flex align-items-center gap-1' onClick={purchaseItem}>
          <i class='ri-shoppping-bag-line'></i>
          Buy Now
      </button>
      {showModal && <Modal name={name} price={price} tokenId={tokenId} purchaseItem={purchaseItem} setshowModal={setshowModal}/>}
      <span className='history_link'>
          <Link to='#'>View History</Link>
      </span>
  </div>
</div>
</div>
   
  
}

export default Nftcard
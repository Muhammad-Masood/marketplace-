import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './nft-card.css'
import Modal from '../../Modal/Modal'
import img from './../../../../assets/images/img-01.jpg';
import avatar from './../../../../assets/images/ava-01.png';
import { useWeb3React } from '@web3-react/core';
import { formatEther } from 'ethers/lib/utils';
const item = {

    id: "04",
    title: "NFT Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia, nostrum et deleniti vero corrupti facilis minima laborum nesciunt nulla error natus saepe illum quasi ratione suscipit tempore dolores. Recusandae, similique modi voluptates dolore repellat eum earum sint.",
    imgUrl: img,
    creator: "Creater address",
    creatorImg: avatar,
    currentBid: 0.00,
  }

const PreviewCard = ({inputs, image}) => {
    const [showModal, setshowModal] =useState(false)
    const {account} = useWeb3React()

    const {title , price, inputImg} = inputs


  return <div className="single_nft_card">
  <div className="nft_img">
      <img src={image.preview || item.imgUrl} alt="" className='w-100'/>
  </div>

<div className="nft_content">
  <h5 className='nft_title text-light'>{title || item.title}</h5>
  <div className="creator_info_wrapper d-flex gap-3">
      {/* <div className="creator_img">
          <img src={creatorImg} alt="" className="w-100" />
      </div> */}
      <div className="creator_info w-100 d-flex align-items-center justify-content-between ">
          <div >
          <h6>Creator By</h6>
          {account && <p>{`${ account?.slice(0,3)}...${ account?.slice(-3)}`}</p>}
          {!account && <p>Creator address</p>}
          </div>
          <div >
              <h6>Current Bid</h6>
              <p>{formatEther(price || 0)} Eth</p>
          </div>
      </div>
  </div>
  {/* <div className="mt-3 d-flex align-items-center justify-content-between">
      <button className='bid_btn d_flex align-items-center gap-1' onClick={()=>setshowModal(true)}>
          <i class='ri-shoppping-bag-line'></i>
          Buy Now
      </button>
      {showModal && <Modal setshowModal={setshowModal}/>}
      <span className='history_link'>
          <Link to='#'>View History</Link>
      </span>
  </div> */}
</div>
</div>
   
  
}

export default PreviewCard
import { useWeb3React } from '@web3-react/core'
import React from 'react'
import './modal.css'
const Model = ({name, price, purchaseItem, setshowModal}) => {

    const {active} = useWeb3React()

  return <div className="modal_wrapper">
    <div className="single_modal">
        <span className="close_modal"  onClick={()=>setshowModal(false)}>
            <i class="ri-close-line"></i>
        </span>
        <h2 className='text-center text-dark'>Place a Bid</h2>
        <p className='text-center text-dark'>You must bid at least. <span>{price} Eth</span></p>
        <div className="input_item mb-4">
            <input type="number" placeholder='00 : 00 Eth' />
        </div>
        
        <div className="input_item mb-3">
            <h6 >Enter Quantity , 7 available</h6>
            <input type="number" placeholder='Enter Quantity' />
        </div>
        <div className="d-flex align-items-center justify-content-between">
            <p className='text-center text-dark'>You must bid at least.</p>
            <span className='money'>$.89Eth</span>
        </div>
        <div className="d-flex align-items-center justify-content-between">
            <p className='text-center text-dark'>Services Fee</p>
            <span className='money'>$.89Eth</span>
        </div>
        <div className="d-flex align-items-center justify-content-between">
            <p className='text-center text-dark'>Total Bid Amount</p>
            <span className='money'>$.89Eth</span>
        </div>
        {active ? 
        <button className="place_bid-btn" onClick={purchaseItem}>
            Place a Bid
        </button> :
        <button className="place_bid-btn" >
        Connect your wallet
    </button> 
        }
    </div>
  </div>
}

export default Model
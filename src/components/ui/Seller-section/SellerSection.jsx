import React from 'react'
import './seller.css'
import { Container,Row,Col } from 'reactstrap';
import ava01 from '../../../assets/images/ava-01.png'
import {SELLER_DATA} from '../../../assets/data/data.js'
const SellerSection = () => {
  return <section>
<Container>
<Row>
    <Col lg='12' className='mb-5'>
        <div className="seller_section-title">
            <h3>Top Seller</h3>
        </div>
    </Col>
    {
        SELLER_DATA.map((item)=>(
    <Col lg='2' md='3' xs='6' key={item.id} className='mb-4'>
        <div className="single_seller-card d-flex align-items-center gap-3">
           <div className="seller_img">
            <img src={item.sellerImg} alt="" className='w-100'/>
           </div>
        </div>
        <div className="seller_content">
            <h6>{item.sellerName}</h6>
            <h6>{item.currentBid}</h6>
        </div>
    </Col>
        
        ))
    }
</Row>
</Container>
  </section>
}

export default SellerSection
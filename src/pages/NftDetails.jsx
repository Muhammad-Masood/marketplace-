import React from 'react'
import CommanSection from '../components/ui/Common-section/CommonSection'
import  LiveAuction  from "../components/ui/Live_auction/LiveAuction";
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import { NFT__DATA } from '../assets/data/data';
import  '../styles/nft-details.css'
import { Link } from 'react-router-dom';
const NftDetails = () => {
    const { id } = useParams()
    const singleNft = NFT__DATA.find(item => item.id === id)
    
    
    return <>
        <CommanSection title={singleNft.title}/>
        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='6'>
                        <img src={singleNft.imgUrl} alt="" className="w-100 singal_nft-img"/>
                    </Col>
                    <Col lg='6' md='6' sm='6'>
                        <div className="single_nft_content">
                        <h2>{singleNft.title}</h2>
                        <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                            <div className='d-flex align-items-center gap-4 single_nft-seen'>
                                <span>
                                    <i class="ri-eye-line"></i>234
                                </span>
                                <span>
                                    <i class="ri-heart-line"></i>123
                                </span>
                            </div>
                            <div className="d-flex align-items-center gap-2 single_nft-more">
                                <span>
                                    <i class='ri-send-plane-line'></i>
                                </span>
                                <span>
                                    <i class='ri-more-2-line'></i>
                                </span>
                            </div>
                        </div>
                        <div className="nft_creator d-flex gap-3 align-items-center">
                            <div className="creator_img">
                                <img src={singleNft.creatorImg} alt="" className="w-100" />
                            </div>
                            <div className="creator_detail">
                                <p className='text-dark'>Create BY</p>
                                <h6>{singleNft.creator}</h6>
                            </div>
                        </div>
                        <p className='my-4 text-dark'>{singleNft.desc}</p>
                        <button className='singleNft-btn d-flex align-align-items-center gap-2 w-100'><i class="ri-shopping-bag-line"></i><Link to='/wallet'>Buy Now</Link></button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <LiveAuction/>
            </>
        
}

        export default NftDetails
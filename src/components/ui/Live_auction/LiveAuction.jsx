import React from 'react'
import { Container, Row, Col, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import Nftcard from './Nft-card/Nftcard';
import { NFT__DATA } from '../../../assets/data/data.js';
import './live-auction.css'
import { useContextAPI } from '../../features/contextapi';
const LiveAuction = () => {
    const {fetchedNfts} = useContextAPI()

    console.log(">>>>>>",{fetchedNfts});
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='mb-5'>
                        {/* <div className="live_auction_top asd d-flex align-items-center justify-content-between">
                            <span><b><Link to='/market'>Explore more...</Link></b></span>
                        </div> */}
                    </Col>
                    {fetchedNfts?.length < 1 && "No Nft To Purchase!" }
                    {
                        fetchedNfts?.slice(0, 4).map((item) => (
                            <Col lg='3' md='4' sm='6' className='mb-4 bn'>
                                <Nftcard key={item.id} item={item} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    )
}

export default LiveAuction
import React,{useState} from 'react'
import CommonSection from '../components/ui/Common-section/CommonSection';
import { Container, Row, Col } from "reactstrap";
import Nftcard from "../components/ui/Live_auction/Nft-card/Nftcard";
import { NFT__DATA } from "../assets/data/data.js";
import '../styles/market.css'
import { useContextAPI } from '../components/features/contextapi';
const Market = () => {
  const [data, setData] = useState(NFT__DATA);
  const {fetchedNfts} = useContextAPI()

  const handleCategory=() => {
    
  }
  const handleItems =()=>{

  }
  const handleSort =(e)=>{
    const filterValue = e.target.value
    if(filterValue === 'Newest Entries'){
      const filterData = NFT__DATA.sort((a, b) => new Date(b.date) - new Date(a.date));
      setData(filterData);
    }
  }
  return <>
    <CommonSection title={'MarketPlace'} />
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <div className="market_product_filter d-flex align-items-center justify-content-between">
              <div className="filter_left d-flex align-items-center gap-5">
                <div className="all_category_filter">
                  <select onChange={handleCategory}>
                    <option>All Categories</option>
                    <option value="art">Art</option>
                    <option value="music">Music</option>
                    <option value="domain-name">Domain Name</option>
                    <option value="virtual-world">Virtual World</option>
                    <option value="trending-cards">Trending Cards</option>
                  </select>
                </div>
                <div className="all_items_filter">
                  <select onChange={handleItems}>
                    <option>All Items</option>
                    <option value="single-item">Single Item</option>
                    <option value="bundle">Bundle</option>

                  </select>
                </div>
              </div>
              <div className="filter_right">
                <select onChange={handleSort}>
                  <option>Sort By</option>
                  <option value="Newest Entries">Newest Entries</option>
                </select>
              </div>
            </div>
          </Col>
          {fetchedNfts?.length < 1 && "No Nft To Purchase!" }
          {
            
            fetchedNfts?.map((item) => (
              <Col lg='3' md='4' sm='6' className='mb-4' key={item.tokenId}>
              <Nftcard item={item} />
            </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  </>
}

export default Market
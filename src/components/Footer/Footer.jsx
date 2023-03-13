import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./footer.css"
const MY_ACCOUNT = [
  {
    display: 'Author Profile',
    url: '/seller-profile'
  },
  {
    display: 'Create Item',
    url: '/create'
  },
  {
    display: 'Market',
    url: '/market'
  },
  {
    display: 'Edit Profile',
    url: '/edit-profile'
  }
]
const RESOURCES = [
  {
    display: 'Help Center',
    url: '#'
  },
  {
    display: 'Partner',
    url: '#'
  },
  {
    display: 'Community',
    url: '#'
  },
  {
    display: 'Activity',
    url: '#'
  }
]
const COMPANY = [
  {
    display: 'About',
    url: '#'
  },
  {
    display: 'Carrer',
    url: '#'
  },
  {
    display: 'Ranking',
    url: '#'
  },
  {
    display: 'Contact Us',
    url: '/contact'
  }
]



const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='5' md='6' sm='6' className='mb-4'>
            <div className="logo">
              <h2 className="d-flex gap-2 align-items-center">
                <span>
                  <i className='ri-fire-fill'></i>
                </span>
                Nfts MarketPlace
              </h2>
              <p style={{color:'#343444'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde magni sequi illo eaque repellendus repudiandae dolores debitis voluptas. Voluptates totam quae ad sit. Id natus blanditiis corporis sequi officiis suscipit!</p>
            </div>
          </Col>
          <Col lg='2' md='3' sm='6' className='mb-4' >
            <h5>My Account</h5>
            <ListGroup className='List_group'>
              {
                MY_ACCOUNT.map((item, index) => (
                  <ListGroupItem key={index} className="list_item">
                    <Link to={item.url}>
                      {item.display}
                    </Link>
                  </ListGroupItem>
                ))}
            </ListGroup>
          </Col>
          <Col lg='2' md='3' sm='6'>
            <h5>Company</h5>
            <ListGroup className='list_group'>
              {
                COMPANY.map((item,index)=>(
                  <ListGroupItem key={index} className="list_item">
                    <Link to={item.url}>
                      {item.display}
                    </Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3' md='6' sm='6' className='mb-4' >
            <div className="social_links d-flex gap-3 align-items-center">
              <span>
                <Link to='#'><i class="ri-facebook-line"></i></Link>
              </span>
              <span>
                <Link to='#'><i class="ri-instagram-line"></i></Link>
              </span>
              <span>
                <Link to='#'><i class="ri-twitter-line"></i></Link>
              </span>
              <span>
                <Link to='#'><i class="ri-telegram-line"></i></Link>
              </span>
              <span>
                <Link to='#'><i class="ri-discord-line"></i></Link>
              </span>
            </div>
          </Col>
          <Col lg='12' className='mt-4 text-center'>
            <p className='copyright'>copyright 2023</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
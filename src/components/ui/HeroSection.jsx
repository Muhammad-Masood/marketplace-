import React from 'react'
import { Container,Row,Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./hero-section.css"
const HeroSection = () => {
  return (
    <section className='hero_section'>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className='hero_content'>
                        <h2>Discover rate digital art and collect <span>sell extraordinary</span> NFTs</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, rerum quasi eius libero sapiente, iusto modi vitae delectus cupiditate accusamus pariatur. Inventore dolorem, laudantium quidem excepturi sapiente nulla tenetur ad!</p>
                        <div className="hero_btns d-flex align-items-center gap-4">
                        <button className='explore_btn d-flex align-items-center gap-2'><i class="ri-rocket-line"></i><Link to='/market'>Explore</Link></button>
                        <button className='create_btn d-flex align-items-center gap-2'><i class="ri-ball-pen-line"></i><Link to='/create'>Create</Link></button>
                        </div>
                    </div>
                </Col>
            
                <Col lg='6' md='6'>
                    <div className="hero_img">
                        
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default HeroSection
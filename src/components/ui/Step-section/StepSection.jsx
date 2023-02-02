import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import './step-section.css'
const StepSection = () => {
    const STEP_DATA = [
        {
            title: 'Setup your Wallet',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus soluta',
            icon: 'ri-wallet-line'
        },
        {
            title: 'Create your collection',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus soluta',
            icon: 'ri-layout-masonry-line'
        },
        {
            title: 'Add your NFTs',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus soluta',
            icon: 'ri-image-line'
        },
        {
            title: 'List your Sale',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus soluta',
            icon: 'ri-list-check'
        },
    ]
    return <section>
        <Container>
            <Row>
                <Col lg='12' className="mb-4">
                    <h3 className='step_title'>Create and sell your NFTs</h3>
                </Col>
                {
                    STEP_DATA.map((item, index) => <Col lg='3' md='4' sm='6' key={index} className='mb-4'>
                        <div className='single_step_item'>
                            <span>
                                <i class={item.icon}></i>
                            </span>
                            <div className="step_item_content">
                                <h5>
                                    <Link to='/wallet'>{item.title}</Link>
                                </h5>
                                <p className='mb-0'>
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </Col>
                    )}

            </Row>
        </Container>
    </section>
}

export default StepSection
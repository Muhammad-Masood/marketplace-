import React from 'react'
import CommonSection from '../components/ui/Common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import '../styles/wallet.css'
import Signup from '../components/Signup/Signup'

const Wallet = () => {
  return <>
    <CommonSection title={"Sign up"} />
    <section>
      <Container>
        <Row>
          

          <Signup />
        </Row>
      </Container>
    </section>
  </>
}

export default Wallet
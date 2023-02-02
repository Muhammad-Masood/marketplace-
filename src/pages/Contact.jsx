import React,{useRef} from 'react'
import CommonSection from '../components/ui/Common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
const Contact = () => {
  const nameRef = useRef('')
  const emailRef = useRef('')
  const submitRef = useRef('')
  const messageRef = useRef('')
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return <>
    <CommonSection title='Contact' />
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6' className='m-auto text-center'>
            <h2>Drop a Message</h2>
            <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sit laboriosam porro animi consectetur aperiam quisquam doloribus velit harum saepe.</p>
            <div className="contact mt-4">
              <form onSubmit={handleSubmit}>
                <div className="form-input">
                  <input type="text" placeholder='Enter your name' ref={nameRef} />
                </div>
                <div className="form-input">
                  <input type="email" placeholder='Enter your Email' ref={emailRef}/>
                </div>
                <div className="form-input">
                  <input type="text" placeholder='Enter Subject' ref={submitRef}/>
                </div>
                <div className="form-input">
                  <textarea rows='7' placeholder='Write message' ref={messageRef}></textarea>
                </div>
                <button className='send_btn' style={{ border: 'none', padding: '7px 25px', borderRadius: '5px',marginTop: '20px',
                 }}>Send a Message</button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </>
}

export default Contact
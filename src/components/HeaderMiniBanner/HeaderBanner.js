import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./headerbanner.css";

const HeaderBanner = () => {

  return (
    <>
        <Container className='py-5'>
            <Row className='mx-auto'>
                  <Col lg={10} className='mx-auto'>
                    <Row className='mx-auto shadow rounded px-3 py-5'>
                    <Col md={4} className='mx-auto'>
                              <h3 className='header_mini_banner_title'>See Sage Intacct in action</h3>
                              <p className='header_mini_banner_para'>Learn what Sage Intacct can offer you with a live demo followed by Q&A financials for the lower midsize enterprises use case from Gartner1..</p>
                              <button className='header_mini_banner_btn'>Sign Up Now &#8594;</button>
                        </Col>
                        <Col md={4} className='mx-auto header_mini_banner'>
                              <h3 className='header_mini_banner_title'>#1 for the 5th year in a row</h3>
                              <p className='header_mini_banner_para'>Once again, Sage Intacct received the highest product score in core financials for the lower midsize enterprises use case from Gartner1.</p>
                              <button className='header_mini_banner_btn'>Sign Up Now &#8594;</button>  
                        </Col>
                        <Col md={4} className='mx-auto header_mini_banner'>
                              <h3 className='header_mini_banner_title'>Outgrowing QuickBooks?</h3>
                              <p className='header_mini_banner_para'>Find out why thriving organizations say goodbye to QuickBooks and partner with Sage Intacct to power of the and their growth.</p>
                              <button className='header_mini_banner_btn'>Sign Up Now &#8594;</button>  
                        </Col>
                    </Row>
                </Col>
            </Row>
      </Container>
    </>
  )
}

export default HeaderBanner

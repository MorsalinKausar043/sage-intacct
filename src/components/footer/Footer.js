import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr';
import { SiGlassdoor } from 'react-icons/si';
import "./footer.css";

const Footer = () => {

    const footerMiniLogo = "https://i.ibb.co/8gDhtpF/aicpa-inline-square2-1.png";

  return (
    <>
        <Container>
              <Row className='mb-5'>
                  <Col className='mb-5'>
                  <hr />
                    <span>
                        <small className='hr_text'>
                            1. Gartner, Inc., “Critical Capabilities for Cloud Core Financial Management Suites for Midsize, Large, and Global Enterprises”; Robert Anderson, John Van Decker, Greg Leiter; May 11, 2021 (ID: G00733936) (In the 2017 report Sage Intacct was recognized as “Intacct”)
                        </small>
                    </span>
                  </Col>
              </Row>
              <Row>
                  {/* footer header icon part */}
                  <Col md={8} lg={3} className='mx-auto'>
                      <ul className='list-unstyled d-flex justify-content-around align-items-center'>
                          <li className='first_footer_logo f_link'>
                              <a href="#">
                                  <FaFacebookF/>
                              </a>
                          </li>
                          <li className='second_footer_logo f_link'>
                              <a href="#">
                                  <GrLinkedinOption/>
                              </a>
                          </li>
                          <li className='third_footer_logo f_link'>
                              <a href="#">
                                  <AiOutlineTwitter/>
                              </a>
                          </li>
                          <li className='fifth_footer_logo f_link'>
                              <a href="#">
                                  <AiFillYoutube/>
                              </a>
                          </li>
                          <li className='sixth_footer_logo f_link'>
                              <a href="#">
                                  <AiOutlineInstagram/>
                              </a>
                          </li>
                          <li className='seventh_footer_logo f_link'>
                              <a href="#">
                                  <SiGlassdoor/>
                              </a>
                          </li>
                      </ul>
                  </Col>
              </Row>
              <Row>
                <Col>
                      <Row className='pt-5'>
                        <Col md={2} lg={3}>
                            <ul className='footer_link'>
                                <li className='fw-bold'>Products</li>
                                <li>Core Financials</li>
                                <li>Dashboard and Reporting</li>
                                <li>Billing</li>
                                <li>Planning</li>
                                <li>Sage Intacct Platform</li> 
                                <li>Advanced Functionality</li> 
                            </ul>
                            <ul className='footer_link'>
                                <li className='fw-bold'>Why Sage Intacct</li>
                                <li>Industries</li>
                                <li>Customer Case Studies</li>
                                <li>Customer Videos</li>
                                <li>Considering QuickBooks?</li>
                                <li>Considering NetSuite?</li>
                                <li>Considering Blackbaud?</li>
                                <li>Considering Acumatica?</li>
                                <li>Considering Abila MIP Fund</li>
                                <li>Accounting?</li>
                                <li>Considering MS Dynamics 365</li>
                                <li>Business Central?</li>
                                <li>Considering MS Dynamics GP?</li>
                            </ul>
                        </Col>
                        <Col md={2} lg={3}>
                            <ul className='footer_link'>
                                <li className='fw-bold'>Services</li>
                                <li>Support</li>
                                <li>Training</li>
                                <li>Community</li>
                                <li>Professional Services</li>
                              </ul>
                              
                            <ul className='footer_link'>
                                <li className='fw-bold'>Partners</li>
                                <li>Value Added Resellers</li>
                                <li>Outsourcing Partners</li>
                                <li>Marketplace Partners</li>
                                <li>Become a Partner</li>
                            </ul>
                              
                            <ul className='footer_link'>
                                <li className='fw-bold'>Company</li>
                                <li>Company</li>
                                <li>About Us</li>
                                <li>Newsroom</li>
                                <li>Events</li>
                            </ul>
                        </Col>
                        <Col md={2} lg={3}>
                            <ul className='footer_link'>
                                <li className='fw-bold'>Resource Center</li>
                                <li>Upcoming Webinars</li>
                                <li>Product Demos</li>
                                <li>Data Sheets</li>
                                <li>White Papers</li> 
                                <li>Accounting Glossary</li> 
                                <li>Blog</li> 
                              </ul>
                              
                            <ul className='footer_link'>
                                <li className='fw-bold'>Quick Links</li>
                                <li>Contact</li>
                                <li>Customer Meetups</li>
                                <li>Sage Transform</li>
                                <li>User Groups</li> 
                                <li>Recommend Sage Intacct</li> 
                                <li>Free 30-day Trial</li> 
                                <Button className='mt-3' variant="success">Subscribe to our Newsletter</Button>
                            </ul>
                        </Col>
                        <Col md={2} lg={3}>
                            <h1 className='main_logo mb-3' href="/home">
                                <span className='logo_first fw-bold'>Sage</span>
                                <span className='logo_gap'></span>
                                <span className='logo_second'>Intacct</span>
                            </h1> 
                            <ul className='footer_link'>
                                <li>Sage Intacct</li>
                                <li>300 Park Avenue, Suite 1400</li>
                                <li>San Jose, CA 95110</li>
                            </ul> 
                              
                            <ul className='footer_link my-3'>
                                 <li className='fw-bold'>Sales Inquiries</li>
                                 <li>877-437-7765</li> 
                            </ul>
                              
                            <ul className='footer_link'>
                                <li className='fw-bold'>Customer Support</li>
                                <li>North America: 877-704-3700 (US toll free) or 408-785-7340</li>
                                <li>United Kingdom: +44 (0)19 1479 5990</li>
                                <li>Australia:+61 1300 729 330</li>
                                <li>South Africa: +27 (0)11 304 3220</li>  
                            </ul>
                            <div>
                                <Image src={footerMiniLogo} className='img-fluid' alt="footer image logo give this web"/>
                            </div>
                        </Col>
                      </Row>
                  </Col>
              </Row>
              <Row>
                  <Col sm={8} className='mx-auto pt-3'>
                      <ul className='footer_link d-flex justify-content-around flex-wrap'>
                          <li className='fw-bold'>Also of Interest:</li>
                          <li>What is an ERP system?</li>
                          <li>Inventory Management System</li>
                          <li>Purchase Order Software</li>
                      </ul>
                  </Col>
              </Row>
              <Row>
                  <Col className='pt-3 pb-5'>
                      <h6 className='text-center footer_navi'>&copyCopyright 2022 Sage Intacct, Inc. | Privacy Policy | Responsible Disclosure | Customer Terms | Site Map</h6>
                  </Col>
              </Row>
        </Container>
    </>
  )
}

export default Footer

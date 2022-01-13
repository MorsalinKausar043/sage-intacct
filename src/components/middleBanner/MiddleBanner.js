import React from 'react';
import { Col, Container, Image, ListGroup, Row } from 'react-bootstrap';
import { FaIndustry, FaFunnelDollar,FaHospitalAlt, FaSalesforce } from 'react-icons/fa';
import { FiNavigation } from 'react-icons/fi';
import { MdHealthAndSafety, MdMedicalServices, MdSubscriptions } from 'react-icons/md';
import { GiEgyptianProfile } from 'react-icons/gi';
import "./middleBanner.css";

const MiddleBanner = () => {

    const manImage = "https://i.ibb.co/nsx4kR2/accounting-financial-management-for-wholesale-distribution.png";

    return (
        <>
            <Container className='pt-3 pb-5'>
                <Row>
                    <Col md={8} className='mx-auto text-center'>
                        <h1>Solutions for your <span className='fw-bold'>industry’s <br /> specific needs</span></h1>
                    </Col>
                </Row>
                <Row className='py-3'>
                    <Col lg={10} className='mx-auto pt-5'>
                        <Row>
                            <Col md={5}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item className='listGroupAcc'><FaIndustry className='me-2 h5'/>For Any Industry</ListGroup.Item>
                                    <ListGroup.Item className='listGroupAcc'><FaFunnelDollar className='me-2 h5'/>Construction and Real Estate</ListGroup.Item>
                                    <ListGroup.Item className='listGroupAcc'><FiNavigation className='me-2 h5'/>Financial Services</ListGroup.Item>
                                    <ListGroup.Item className='listGroupAcc'><MdHealthAndSafety className='me-2 h5'/>Healthcare</ListGroup.Item>
                                    <ListGroup.Item className='listGroupAcc'><FaHospitalAlt className='me-2 h5'/>Hospitality</ListGroup.Item>
                                    <ListGroup.Item className='listGroupAcc'><GiEgyptianProfile className='me-2 h5'/>Nonprofits</ListGroup.Item>
                                    <ListGroup.Item className='listGroupAcc'><MdMedicalServices className='me-2 h5'/>Professional Services</ListGroup.Item>
                                    <ListGroup.Item className='listGroupAcc'><MdSubscriptions className='me-2 h5'/>Subscription and SaaS</ListGroup.Item>
                                    <ListGroup.Item className='listGroupAcc'><FaSalesforce className='me-2 h5'/>Wholesale Distribution</ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col md={7} className='p-3'>
                                <Row>
                                    <Col>
                                        <h6 className='fw-bold'>Wholesale Distribution</h6>
                                        <p>Distributors are becoming more and more customer-centric. The trick? We’re helping them stock up on better business insights to improve productivity. Built from the ground up to be the best in the industry, Sage...</p>
                                        <button className='middle_btn'>Wholesale Distribution industry <span>&#x2192;</span></button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Image src={manImage} className='img-fluid mt-3 rounded' alt='man_image'/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default MiddleBanner;
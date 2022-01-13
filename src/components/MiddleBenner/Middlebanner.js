import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import "./middlebanner.css";

const Middlebanner = () => {

    const middleFirstImage = "https://i.ibb.co/G9C7tcg/sage-intacct-customer-for-life.png";
    const middleSecondImage = "https://i.ibb.co/Nx7LqnC/aicpa-preferred-financial-management-solution.png";
    const middleThirdImage = "https://i.ibb.co/xJvWvPQ/grow-scale-with-sage-intacct.png";

    return (
        <>
            <Container className='py-5'>
                <Row className='py-5'>
                    <Col>
                        <Row>
                            <Col md={8} className='mx-auto text-center'>
                                <h1>Your <span className='fw-bold'>partner for the long-term</span></h1>
                                 <p className='mt-5 middle_para'>We’re obsessed with ensuring your success. From our <span>Customer for Life™</span> program to our proven, <span>connected products</span> that you won’t outgrow; we’ll be with you every step of the way.</p>
                            </Col>
                        </Row>
                        <Row className='pt-5 mx-auto'>
                            <Col lg={4} className='text-center'>
                                <Image src={middleFirstImage} className='middle_banner_div_img' alt='Middle Banner Image'/>
                                <h4 className='middle_banner_div_title'>You get a partner that’s <br /> invested in your success</h4>
                            </Col>
                            <Col lg={4} className='text-center my-5 my-md-0'>
                                <Image src={middleSecondImage} className='middle_banner_div_img' alt='Middle Banner Image'/>
                                <h4 className='middle_banner_div_title'>You get the best, proven technology <br /> for your organization</h4>
                            </Col>
                            <Col lg={4} className='text-center'>
                                <Image src={middleThirdImage} className='middle_banner_div_img' alt='Middle Banner Image'/>
                                <h4 className='middle_banner_div_title'>You won’t outgrow us; we’ll scale <br /> with you every step of the way</h4>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Middlebanner;
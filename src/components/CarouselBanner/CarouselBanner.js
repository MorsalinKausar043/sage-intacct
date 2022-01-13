import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import "./carouselBanner.css";

const CarouselBanner = () => {

    const firstImage = "https://i.ibb.co/L6BtKbc/red-door-interactive-featured-customer.png";
    const secondImage = "https://i.ibb.co/9Wq4Bv9/macon-bibb-county-industrial-authority-featured-customer.png";

    return (
        <>
            <Container className='py-5'>
                <Row>
                    <Col md={10} className='mx-auto'>
                        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <Row>
                                        <Col md={6} className='text-center text-md-start'>
                                            <h1>Trusted by</h1>
                                            <h2 className='fw-bold'>over 15,000 customers</h2>
                                        </Col>
                                        <Col md={6} className='mt-3 mt-md-0'>
                                            <Image src={firstImage} className='w-100 rounded p-5 carousel_image' alt='carousel-image'/>
                                        </Col>
                                    </Row>
                                    <Row className='Carousel_another_side p-5 shadow rounded'>
                                        <Col md={6}>
                                            <h2 className='pb-3'>Key Outcomes</h2>
                                            <Row>
                                                <Col className='col-3'><h2 className='modulus_color'>12%</h2></Col>
                                                <Col className='col-9'><p>Improved profitability year over year</p></Col>
                                            </Row>
                                            <Row>
                                                <Col className='col-3'><h2 className='modulus_color my-3'>85%</h2></Col>
                                                <Col className='col-9'><p>Reduced overall budgeting and planning time</p></Col>
                                            </Row>
                                            <Row>
                                                <Col className='col-3'><h2 className='modulus_color'>33%</h2></Col>
                                                <Col className='col-9'><p>Accelerated time to finalize budgets</p></Col>
                                            </Row>
                                        </Col>
                                        <Col md={6} className='p-3 carouse_body'>
                                            <h5 className='carousel_body_text'> The first time I pulled up Sage Intacct Budgeting and Planning in our executive meeting, they were blown away by how quickly I was able to create a scenario, plug in what they were asking for, and show the results in real-time. Our leadership was impressed with how well the solution worked, saw its value off the bat, and now they want me to bring it every time they review budgets.</h5>
                                            <h5 className='fw-bold mt-5'>Natalie Bonczek</h5>
                                            <h6>Controller, Red Door Interactive</h6>
                                        </Col>
                                    </Row>
                                </div>
                                <div class="carousel-item">
                                <Row>
                                        <Col md={6} className='text-center text-md-start'>
                                            <h1>Trusted by</h1>
                                            <h2 className='fw-bold'>over 15,000 customers</h2>
                                        </Col>
                                        <Col md={6} className='mt-3 mt-md-0'>
                                            <Image src={secondImage} className='w-100 rounded p-5 carousel_image' alt='carousel-image'/>
                                        </Col>
                                    </Row>
                                    <Row className='Carousel_another_side p-5 shadow rounded'>
                                        <Col md={6}>
                                            <h2 className='pb-3 fw-bold'>Key Outcomes</h2>
                                            <Row>
                                                <Col className='col-3'><h2 className='modulus_color'>12%</h2></Col>
                                                <Col className='col-9'><p>Improved profitability year <br/> over year</p></Col>
                                            </Row>
                                            <Row>
                                                <Col className='col-3'><h2 className='modulus_color my-3'>85%</h2></Col>
                                                <Col className='col-9'><p>Reduced overall budgeting <br/> and planning time</p></Col>
                                            </Row>
                                            <Row>
                                                <Col className='col-3'><h2 className='modulus_color'>33%</h2></Col>
                                                <Col className='col-9'><p>Accelerated time to <br/> finalize budgets</p></Col>
                                            </Row>
                                        </Col>
                                        <Col md={6} className='p-3 carouse_body'>
                                            <h5 className='carousel_body_text'> The first time I pulled up Sage Intacct Budgeting and Planning in our executive meeting, they were blown away by how quickly I was able to create a scenario, plug in what they were asking for, and show the results in real-time. Our leadership was impressed with how well the solution worked, saw its value off the bat, and now they want me to bring it every time they review budgets.</h5>
                                            <h5 className='fw-bold mt-5'>Natalie Bonczek</h5>
                                            <h6>Controller, Red Door Interactive</h6>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </Col>
                </Row>
           </Container>
        </>
    );
};

export default CarouselBanner;
import React from 'react';
import "./home.css";
import { Button, Col, Container, Row,Image } from 'react-bootstrap';

const Home = () => {

    const homePhotoUrl = "https://i.ibb.co/5MGshFV/statistic-set-elements-dashboard-template-52683-24173.jpg";

    return (
        <>
            <Container className='my-5 px-5 py-0 py-lg-5'>
                <Row className='mx-auto'>
                    <Col sm={12} lg={7} className='m-auto'>
                        <h1 className='home_heading'>
                            The Leader in Accounting and Financial Management Software
                        </h1>
                        <p className='my-3'>
                            Whether you’re a growing startup or an established public company, we’re the right partner for your long-term success.
                        </p>
                        <Button variant="outline-success">View Demo</Button>
                    </Col>
                    <Col sm={12} lg={5} className='mt-5 mt-lg-0'>
                        <Image src={homePhotoUrl} alt="homePhotoUrl" className='w-100 mx-auto shadow rounded' />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;
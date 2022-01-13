import React from 'react';
import { Accordion, Col, Container, Image, Row } from 'react-bootstrap';
import { FaCommentDollar } from 'react-icons/fa';
import { GiNetworkBars } from 'react-icons/gi';
import { IoMdAnalytics } from 'react-icons/io';
import { HiOutlineUserGroup } from 'react-icons/hi';
import "./accordingPart.css";

const AccordingPart = () => {

    const headerMiniBannerImg = "https://i.ibb.co/th3q93c/sage-Intacct.png";

    return (
        <>
            <Container className='py-5'>
                <Row className=''>
                    <Col md={8} className='text-center mx-auto'>
                        <h2 className='fw-bold'>Thrive in today’s ever-changing, digital world</h2>
                        <h2>with connected solutions that simply work</h2>
                    </Col>
                </Row>
                <Row>
                    <Col lg={10} className='mx-auto'>
                        <Row>
                            <Col md={6} className='p-5'>
                                <Image src={headerMiniBannerImg} className='img-fluid' alt='header-Mini_Banner-Img'/>
                            </Col>
                            <Col md={6} className='pt-5'>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className='h1'><FaCommentDollar className='me-1'/> Financials</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                <li className='according_li'><span className='according_li_syntex'>&#x2713;</span> Slice and dice your data with real-time, multi-dimensional reporting</li>
                                                <li className='according_li'><span className='according_li_syntex'>&#x2713;</span> Consolidate all your entities in minutes, no more spreadsheets</li>
                                                <li className='according_li'><span className='according_li_syntex'>&#x2713;</span> Automate mundane accounting tasks to increase your efficiency up to 90%</li>
                                                <li className='according_li'><span className='according_li_syntex'>&#x2713;</span> Automate mundane accounting tasks to increase your efficiency up to 90%</li>
                                                <li className='according_li'><span className='according_li_syntex'>&#x2713;</span> Free your teams to focus on higher value work with AI-powered solutions</li>
                                            </ul>
                                            <button className='according_page_btn'>learn about &#x2192;</button>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header><GiNetworkBars className='me-1'/>Planning</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                <li className='according_li'><span className='according_li_syntex'>&#x2713;</span> Slice and dice your data with real-time, multi-dimensional reporting</li>
                                                <li className='according_li'><span className='according_li_syntex'>&#x2713;</span> Consolidate all your entities in minutes, no more spreadsheets</li>
                                                <li className='according_li'><span className='according_li_syntex'>&#x2713;</span> Automate mundane accounting tasks to increase your efficiency up to 90%</li>
                                                <li className='according_li'><span className='according_li_syntex'>&#x2713;</span> Free your teams to focus on higher value work with AI-powered solutions</li>
                                            </ul>
                                            <button className='according_page_btn'>learn about &#x2192;</button>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header><IoMdAnalytics className='me-1'/>Analytics</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                <li className='according_li'><span className='according_li_syntex'>&#x2713;</span> Slice and dice your data with real-time, multi-dimensional reporting</li>
                                                <li className='according_li'><span className='according_li_syntex'>&#x2713;</span> Consolidate all your entities in minutes, no more spreadsheets</li>
                                                <li className='according_li'><span className='according_li_syntex'>&#x2713;</span> Automate mundane accounting tasks to increase your efficiency up to 90%</li>
                                                <li className='according_li'><span className='according_li_syntex'>&#x2713;</span> Free your teams to focus on higher value work with AI-powered solutions</li>
                                            </ul>
                                            <button className='according_page_btn'>learn about &#x2192;</button>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header><HiOutlineUserGroup className='me-1'/>HR & Payroll</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                <li className='according_li'><span className='according_li_syntex'>&#x2713;</span> Slice and dice your data with real-time, multi-dimensional reporting</li>
                                                <li className='according_li'><span className='according_li_syntex'>&#x2713;</span> Consolidate all your entities in minutes, no more spreadsheets</li>
                                                <li className='according_li'><span className='according_li_syntex'>&#x2713;</span> Automate mundane accounting tasks to increase your efficiency up to 90%</li>
                                                <li className='according_li'><span className='according_li_syntex'>&#x2713;</span> Free your teams to focus on higher value work with AI-powered solutions</li>
                                            </ul>
                                            <button className='according_page_btn'>learn about &#x2192;</button>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AccordingPart;
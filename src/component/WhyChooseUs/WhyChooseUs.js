import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeadingTitle from '../HeadingTitle/HeadingTitle';
import './WhyChooseUs.css'

const WhyChooseUs = () => {
    return (
        <Container fluid className="whyChooseUs">
            <Container className="px-5">
                <HeadingTitle>
                    <h1 >Why Choose EyeLife Clinic?</h1>
                    <div className="headingtitle-seperator"></div>
                    <p>We Have Best Professional Team To Care Your Eyes</p>
                </HeadingTitle>
                <Row className="g-5">
                    <Col md="5">
                        <img className="img-fluid" src="https://i.ibb.co/p2s8cZZ/whychooseus.jpg" alt="" />
                    </Col>
                    <Col md="7">
                        <Row>
                            <div className="col">
                                <h1 className="whyChooseHeading">Best Optometrist & Eye Care That You Can Trust</h1>
                                <p className="icon-card-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                            </div>
                        </Row>
                        <Row className="g-3">
                            <Col md="6"> <div>
                                <div className="icon-card">
                                    <i class="bi bi-check-circle-fill iconsize"></i>
                                    <h4 className="ms-3 mb-0">Eye Health Checkups</h4>
                                </div>
                                <p className="icon-card-p">Lorem ipsum dolor sit amet cons adipiscing elit sed doesmo</p>
                            </div>
                            </Col>
                            <Col md="6"> <div>
                                <div className="icon-card">
                                    <i class="bi bi-check-circle-fill iconsize"></i>
                                    <h4 className="ms-3 mb-0">Contact Lens Service</h4>
                                </div>
                                <p className="icon-card-p">Lorem ipsum dolor sit amet cons adipiscing elit sed doesmo</p>
                            </div>
                            </Col>
                            <Col md="6"> <div>
                                <div className="icon-card">
                                    <i class="bi bi-check-circle-fill iconsize"></i>
                                    <h4 className="ms-3 mb-0">Laser Eye Correction</h4>
                                </div>
                                <p className="icon-card-p">Lorem ipsum dolor sit amet cons adipiscing elit sed doesmo</p>
                            </div>
                            </Col>
                            <Col md="6"> <div>
                                <div className="icon-card">
                                    <i class="bi bi-check-circle-fill iconsize"></i>
                                    <h4 className="ms-3 mb-0">Eye Examination</h4>
                                </div>
                                <p className="icon-card-p">Lorem ipsum dolor sit amet cons adipiscing elit sed doesmo</p>
                            </div>
                            </Col>

                        </Row>
                        <Row>
                            <Col className="mt-3">
                                <Link className="btn-regular " to="/about">More AboutUs</Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </Container >
    );
};

export default WhyChooseUs;
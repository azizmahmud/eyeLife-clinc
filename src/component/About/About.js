import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Doctors from '../Doctors/Doctors';
import HeadingTitle from '../HeadingTitle/HeadingTitle';
import './About.css'

const About = () => {
    return (<>
        <Container fluid className="about-header">
            <Row>
                <Col>
                    <div className="col-lg-6 mx-auto">
                        <h1 className="text-center">About Us</h1>
                        <p className="text-center">The leading provider of quality vision care and personalized optometric services in London. Our focus is on providing the very best patient care possible.</p>
                    </div>
                </Col>
            </Row>
        </Container >

        <Container className="aboutus-section px-5">
            <HeadingTitle>
                <h1 className="headingtitle-heading">About Eye Clinic</h1>
                <div className="headingtitle-seperator"></div>
                <p className="headingtitle-pera">Eye treatments is branch of medicine that deals with the anatomy,diseases of the eyeball</p>
            </HeadingTitle>
            <Row className="g-5">
                <Col md="6">
                    <img src="https://i.ibb.co/5LzDRps/aboutus.jpg" alt="" />
                </Col>
                <Col md="6">
                    <div>
                        <h2 className="whyChooseHeading">Introducing The High Quality EyeLife Clinic</h2>
                        <p className="icon-card-p">There are many different eye conditions; some are minor and easily treated but others can cause serious problems or lead to permanent loss of vision. We offer varying specialties, covering all aspects of the medical and surgical eye care, including cataract surgery.</p>
                    </div>
                    <div className="icon-card">
                        <i class="bi bi-check-circle-fill iconsize"></i>
                        <p className="mb-0 ps-3">Drawing up an individual treatment program for patient.</p>
                    </div>
                    <div className="icon-card mt-3">
                        <i class="bi bi-check-circle-fill iconsize"></i>
                        <p className="mb-0 ps-3">Performing all operations and proceds highest professional level.</p>
                    </div>
                    <div className="icon-card mt-3">
                        <i class="bi bi-check-circle-fill iconsize"></i>
                        <p className="mb-0 ps-3">Compliance of materials equipment international standards.</p>
                    </div>
                    <div className="mt-4">
                        <Link className="btn-regular " to="/service">See Treatment</Link>

                    </div>
                </Col>
            </Row>
        </Container>
        <Doctors></Doctors>

    </>
    );
};

export default About;
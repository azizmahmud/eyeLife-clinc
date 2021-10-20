import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeadingTitle from '../HeadingTitle/HeadingTitle';
import './VisionCare.css'

const VisionCare = () => {
    return (
        <Container fluid className="vision-bg">
            <Container className="px-5">
                <Row>
                    <HeadingTitle>
                        <h1>EyeLife Health And Vision Care</h1>
                        <div className="headingtitle-seperator"></div>
                        <p>Placing you and your safety at the heart of everything we do With having our entire team of optometrists</p>
                    </HeadingTitle>
                </Row>
                <Row className="g-4">
                    <Col md="4">
                        <div className="vision-card">
                            <img className="img-fluid" src="https://i.ibb.co/x8CHnrq/vision1.jpg" alt="" />
                            <h2>Contact Lenses</h2>
                            <p>Because the safety of your visual health is our primary concern, operates under strictest clinical governance</p>
                            <Link>Read More</Link>
                        </div>
                    </Col>
                    <Col md="4">
                        <div className="vision-card">
                            <img className="img-fluid" src="https://i.ibb.co/XyfxbZv/vision2.jpg" alt="" />
                            <h2>Comprehensive</h2>
                            <p>Your time is precious, so we ensures that your visual health can be regularly monitored  suitable timing</p>
                            <Link>Read More</Link>
                        </div>
                    </Col>
                    <Col md="4">
                        <div className="vision-card">
                            <img className="img-fluid" src="https://i.ibb.co/S7vtLxn/vision3.jpg" alt="" />
                            <h2>Keratoconus</h2>
                            <p>Where patients are empowered to take responsibility in managing their own health effective treatment plans</p>
                            <Link>Read More</Link>
                        </div>
                    </Col>
                    <Col md="4"></Col>
                    <Col md="4"></Col>
                </Row>
            </Container>
        </Container>
    );
};

export default VisionCare;
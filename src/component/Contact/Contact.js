import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <>
            <Container fluid className="about-header">
                <Row>
                    <Col>
                        <div className="col-lg-6 mx-auto">
                            <h1 className="text-center">Contact with us</h1>
                            <p className="text-center">The leading provider of quality vision care and personalized optometric services in London. Our focus is on providing the very best patient care possible.</p>
                        </div>
                    </Col>
                </Row>
            </Container >
            <Container className="px-5">
                <Row className="my-5 py-5">
                    <Col md="6">
                        <div>
                            <h2 className="whyChooseHeading">Contact With us</h2>
                            <p className="icon-card-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo deleniti dolores itaque eligendi amet natus nobis, vel sequi soluta quas voluptatem non tempora adipisci ipsa, aperiam magnam rem? Libero, cumque..</p>
                        </div>
                        <div className="icon-card">
                            <i class="bi bi-check-circle-fill iconsize"></i>
                            <p className="mb-0 ps-3">location: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="icon-card mt-3">
                            <i class="bi bi-check-circle-fill iconsize"></i>
                            <p className="mb-0 ps-3">Contact: 019492349203</p>
                        </div>
                        <div className="icon-card mt-3">
                            <i class="bi bi-check-circle-fill iconsize"></i>
                            <p className="mb-0 ps-3">email: hello@gmail.com</p>
                        </div>
                    </Col>
                    <Col md="6">
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control placeholder="Apartment, studio, or floor" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridMessage">
                                <Form.Label>write your message</Form.Label>
                                <Form.Control type="message" placeholder="Write message" />
                            </Form.Group>

                            
                            <Button className="btn btn-success mt-3" type="submit">
                                Send
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container >
        </>
    );
};

export default Contact;
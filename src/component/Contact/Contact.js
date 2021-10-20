import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
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
        </>
    );
};

export default Contact;
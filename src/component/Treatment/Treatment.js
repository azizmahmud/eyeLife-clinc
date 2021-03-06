import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Services from '../Services/Services';
import './Treatment.css'

const Treatment = () => {
    return (
        <div>
            <Container fluid className="about-header">
                <Row>
                    <Col>
                        <div className="col-lg-6 mx-auto">
                            <h1 className="text-center">Treatments List</h1>
                            <p className="text-center">The leading provider of quality vision care and personalized optometric services in London. Our focus is on providing the very best patient care possible.</p>
                        </div>
                    </Col>
                </Row>
            </Container >
            <Services></Services>
        </div>
    );
};

export default Treatment;
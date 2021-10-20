import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Services from '../Services/Services';
import './Treatment.css'

const Treatment = () => {
    return (
        <div>
            <Container fluid className="p-0 m-0 mb-5">
                <Row>
                    <Col>
                        <div className="treatment-cover">
                            <div className="treatment-box">
                                <h1 className="text-center">Treatments List</h1>
                                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo dicta reprehenderit tenetur praesentium ab animi ad quisquam voluptatibus doloribus.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Services></Services>
        </div>
    );
};

export default Treatment;
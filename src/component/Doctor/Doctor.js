import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Doctor.css'

const Doctor = ({ doctor }) => {
    const { img, name, jobTitel } = doctor
    return (
        <Col>
            <Card className="h-100 doctor-card border-0">
                <Card.Body>
                    <Card.Img variant="top" className="doctor-img" src={img} />
                    <Card.Title className="doctorName mt-3">{name}</Card.Title>
                    <Card.Text className="doctorTitle">{
                        jobTitel
                    }</Card.Text>

                </Card.Body>
            </Card>
        </Col>


    );
};

export default Doctor;
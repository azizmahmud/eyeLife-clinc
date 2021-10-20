import React from 'react';
import {Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, img, serviceName, discription } = service
    return (
        <Col className="">
            <Card className="h-100 service-card border-0">
                <Card.Body className="p-0">
                    <Card.Img variant="top" src={img} />
                    <Card.Title className="service-heading">{serviceName}</Card.Title>
                    <Card.Text className="service-para">{
                        discription
                    }</Card.Text>

                </Card.Body>
                <Card.Footer className="bg-white border-0 pb-3 mt-3">
                    <Link className="btn-regular" to={`/serviceDetails/${id}`}>See Details</Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Service;
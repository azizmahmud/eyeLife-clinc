import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <Container fluid className="notfound-bg">
            <Row>
                <Col>
                    <div className="">
                        <h1 className="text-center">Page Not Found</h1>
                        <p className="text-center">The page you are lookig for it's Not Found</p>
                        <Link to="/home" className="">
                            <button className="btn-regular">Go Back To Home</button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;
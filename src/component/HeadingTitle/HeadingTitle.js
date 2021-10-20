import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './HeadingTitle.css'

const HeadingTitle = ({ children }) => {
    return (
        <Row>
            <Col className="headingtitle">
                {children}

            </Col>
        </Row>
    );
};

export default HeadingTitle;
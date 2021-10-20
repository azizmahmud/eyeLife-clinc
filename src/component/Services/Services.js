import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import HeadingTitle from '../HeadingTitle/HeadingTitle';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <Container className="service-section px-5">
            <HeadingTitle>
                <h1 className="headingtitle-heading">Reliable Eye Treatments</h1>
                <div className="headingtitle-seperator"></div>
                <p className="headingtitle-pera">Eye treatments is branch of medicine that deals with the anatomy,diseases of the eyeball</p>
            </HeadingTitle>
            <Row xs={1} md={3} className="g-4">

                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;
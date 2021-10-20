import React, { useEffect, useState } from 'react';
import {  Container, } from 'react-bootstrap';
import './ServiceDetails.css'

import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { detailsId } = useParams();

    const [services, setServices] = useState([])
    console.log(services)

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const service = services?.find(x => x.id == detailsId)
    console.log(service)

    return (
        <Container>
            <div className="services">
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid w-100" src={service?.img} alt="" />
                    </div>
                    <div className="col-md-6">
                       <div className="d-flex justify-content-center aling-itmes-center">
                       <div className="">
                            <h1>{service?.serviceName}</h1>
                            <p>{service?.discription}</p>
                        </div>
                       </div>
                    </div>
                </div>
            </div>

        </Container>

    );
};

export default ServiceDetails;
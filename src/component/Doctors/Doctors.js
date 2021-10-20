import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';
import HeadingTitle from '../HeadingTitle/HeadingTitle';
import './Doctors.css'



const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('./doctor.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, []);
    return (
        <Container fluid className="doctors-section">
            <Container id="doctors" className="px-5 ">
                <HeadingTitle>
                    <h1 className="headingtitle-heading">Our Dedicated Doctors</h1>
                    <div className="headingtitle-seperator"></div>
                    <p className="headingtitle-pera">Eye treatments is branch of medicine that deals with the anatomy,diseases of the eyeball</p>
                </HeadingTitle>
                <Row xs={1} md={4} className="g-4">

                    {
                        doctors.map(doctor => <Doctor
                            key={doctor.id}
                            doctor={doctor}
                        ></Doctor>)
                    }
                </Row>
            </Container>
        </Container>


    );
};

export default Doctors;
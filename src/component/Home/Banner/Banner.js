import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel className="">
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src="http://jituchauhan.com/site-templates/medical-website-template/07_eye_care/images/slider-2.jpg"
                    alt="First slide"
                />
                <Carousel.Caption >
                    <h3>Eye Examinations Spectacles and Contact lenses</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ad iure vel corporis eum nam aspernatur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="http://jituchauhan.com/site-templates/medical-website-template/07_eye_care/images/slider-1.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>High Innovation Professional Eye Care</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <div className="d-flex align-items-center">
                    <img
                        className="d-block w-100"
                        src="http://jituchauhan.com/site-templates/medical-website-template/07_eye_care/images/slider-3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Eye Care Specialist Services That You Can Trust</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
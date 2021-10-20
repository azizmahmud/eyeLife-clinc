import React from 'react';
import './About.css'

const About = () => {
    return (<>
        <div className="px-4 py-5  text-center aboutHeader">

            <div className="col-lg-6 mx-auto py-5">
                <h1 className="display-5 ">Abot Us</h1>
                <p className="lead mb-4">The leading provider of quality vision care and personalized optometric services in London. Our focus is on providing the very best patient care possible.</p>
            </div>
        </div>
        <div className="container py-5 px-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className=" col-md-4">
                    <img src="https://demo.web3canvas.com/themeforest/medenin/images/about-img.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                </div>
                <div className="col-md-8">
                    <h1 className="mb-3">Our Mission And Vision</h1>
                    <p className="lead">We treat patients with respect are compassionate, thoughtful responsive to their needs and sensitive to ensuring the comfort.
                        We treat patients with respect are compassionate, thoughtful responsive to their needs and sensitive to ensuring the comfort.
                        We treat patients with respect are compassionate, thoughtful responsive to their needs and sensitive to ensuring the comfort.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Our Treatment</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container px-4 py-5" id="featured-3">

            <h2 className="pb-2 text-center">Our Vision</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="feature col">
                    <div className="feature-icon bg-primary bg-gradient">
                        <i className="bi bi-check-circle" width="1em" height="1em"></i>
                    </div>
                    <h2>EXCELLENT TREATMENTS
                    </h2>
                    <p>We treat patients with respect are compassionate, thoughtful responsive to their needs and sensitive to ensuring the comfort.</p>

                </div>
                <div className="feature col">
                    <div className="feature-icon bg-primary bg-gradient">
                        <i className="bi bi-check-circle"></i>
                    </div>
                    <h2>INTEGRATING TEACHING
                    </h2>
                    <p>We ethically, accept personal accountability, communicate openly and honestly and treat everyone with trust and respect.</p>

                </div>
                <div className="feature col">
                    <div className="feature-icon bg-primary bg-gradient">
                        <i className="bi bi-check-circle" width="1em" height="1em"></i>
                    </div>
                    <h2>WORKFORCE CAPABILITY</h2>
                    <p>We communicate openly, respect diversity of views and skills and work effectively with partners and in multi-disciplinary teams.</p>
                </div>
            </div>
        </div>
    </>
    );
};

export default About;
import React from 'react';
import './information.css'

const Information = () => {
    return (
        <div className="container px-4 py-5" id="featured-3">

            <h2 className="pb-2 text-center">Why Choose
                EyeLife Clinic?</h2>
                <p>We Have Best Professional Team To Care Your Eyes</p>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="feature col">
                    <div className="feature-icon bg-primary bg-gradient">
                        <i className="bi bi-check-circle" width="1em" height="1em"></i>
                    </div>
                    <h2>Advanced Care
                    </h2>
                    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>

                </div>
                <div className="feature col">
                    <div className="feature-icon bg-primary bg-gradient">
                        <i className="bi bi-check-circle"></i>
                    </div>
                    <h2>Medical & Surgical
                    </h2>
                    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>

                </div>
                <div className="feature col">
                    <div className="feature-icon bg-primary bg-gradient">
                        <i className="bi bi-check-circle" width="1em" height="1em"></i>
                    </div>
                    <h2>Get Result Online</h2>
                    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                </div>
            </div>
        </div>
    );
};

export default Information;
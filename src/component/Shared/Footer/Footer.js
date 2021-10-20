import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../image/logo.png'

const Footer = () => {
    return (
        <div className="bg-dark  pt-5 text-white text-center" >
            <footer className="py-3 py-4 container">
                <Link to="/home"><img src={logo} alt="" /></Link>
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <Link to="/home" className="nav-link px-2 text-white">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link px-2 text-white">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/service" className="nav-link px-2 text-white">Treatment</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link px-2 text-white">Contact</Link>
                    </li>
                </ul>
                <p className="text-center text-muted">© 2021  All rights reserved by EyeLife Clinic</p>
            </footer>
        </div>
    );
};

export default Footer;
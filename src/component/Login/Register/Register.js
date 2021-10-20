import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import LoginIllastraion from '../../../image/login-illastration.png'

const Register = () => {

    const { signUpWithEmailPassword, setEmail, setPassword, error } = useAuth();

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    return (


        <Container>
            <Row>
                <Col md={6} className="d-flex align-items-center">
                    <div className="w-75 mx-auto">
                        <form onSubmit={signUpWithEmailPassword} class="row g-4">
                            <div class="col-md-12">
                                <h2 className="text-center">Create An Account</h2>
                            </div>
                            <div class="col-md-12">
                                <input onChange={handleEmail} type="email" class="form-control" id="inputEmail4" placeholder=" Enter email" />
                            </div>
                            <div class="col-md-12">
                                <input onChange={handlePassword} type="password" class="form-control" id="inputPassword4" placeholder=" Enter password" />
                            </div>
                            <label class="form-check-label text-start">
                                {error}
                            </label>


                            <div class="col-12 text-center">
                                <button type="submit" class="btn w-100 btn-primary">Register</button>
                            </div>
                        </form>
                        <div class="col-12 text-center mt-3">
                            <p className="mt-3 text-muted">already have an account? <Link to="/login">Log in</Link></p>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <img src={LoginIllastraion} alt="" className="img-fluid" />
                </Col>
            </Row>
        </Container>

    );
};

export default Register;
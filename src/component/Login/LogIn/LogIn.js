import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import LoginIllastraion from '../../../image/login-illastration.png'
import { useHistory, useLocation } from 'react-router';

const LogIn = () => {
    const { setEmail, setUser, setError, setPassword, signInUsingGoogle, loginWithEmailPassword, setIsLoading, error } = useAuth();
    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || "/home"

    const handleLogin = (e) => {
        e.preventDefault();
        
        loginWithEmailPassword()
            .then(result => {
                history.push(redirect_url)
                // Signed in 
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
        setIsLoading(false)

    }
    const handaleGoogleLogIn = (e) => {
        e.preventDefault();
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message)
            })
        setIsLoading(false)

    }


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
                        <form onSubmit={handleLogin} className="row g-4">
                            <div className="col-md-12">
                                <h2 className="text-center">Please Log In</h2>
                            </div>
                            <div className="col-md-12">
                                <input onChange={handleEmail} type="email" className="form-control" id="inputEmail4" placeholder="Enter email" />
                            </div>
                            <div className="col-md-12">
                                <input onChange={handlePassword} type="password" className="form-control" id="inputPassword4" placeholder="Enter password" />
                            </div>
                            <label className="form-check-label text-start">
                                {error}
                            </label>


                            <div className="col-12 text-center">
                                <button type="submit" className="btn w-100 btn-primary">Log in</button>
                            </div>
                        </form>
                        <div className="col-12 text-center mt-3">
                            <p className="mx-3 text-muted">Or</p>
                            <button onClick={handaleGoogleLogIn} className="btn w-100 btn-success"><i className="bi bi-google"></i>  Google Log in</button>
                            <p className="mt-3 text-muted">New user?<Link to="/register">Create Account</Link></p>
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

export default LogIn;
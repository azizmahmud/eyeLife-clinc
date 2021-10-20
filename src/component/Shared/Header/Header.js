import React from 'react';
import { Nav, Button, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../image/logo.png'


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar sticky="top" bg="dark" variant="dark" expand="lg" className=" ">
            <Container className="px-5">
                <Navbar.Brand as={Link} to="/home"><img className="img-fluid" src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/service">Treatment</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

                    </Nav>
                    <div className="d-flex">
                        {
                            !user?.email ? <Link to="/login" ><Button className="me-2" variant="outline-success">LOG IN</Button></Link>
                                :
                                <div>
                                    <span className="me-3 text-white">{user.displayName}</span>
                                    <img src={user.photoURL} alt="Profile-Pic" width="45" height="45" className="rounded-circle me-3" />
                                    <Button onClick={logOut} className="" variant="success">LOG OUT</Button>
                                </div>
                        }


                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;
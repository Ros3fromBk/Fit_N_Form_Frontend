import "../NavBar.css"
import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>

        <Navbar>
            <Container>
                <Navbar.Brand>
                    <Nav.Link as={Link} to="/">Log in </Nav.Link>
                </Navbar.Brand>
                <Nav className='ms-auto'>
                    <Nav.Link as={Link} to="/login">Excercises</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </header>

    );
};

export default NavBar;
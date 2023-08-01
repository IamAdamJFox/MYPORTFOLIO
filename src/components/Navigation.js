// imports
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Style/Nav.css';

// Navigation component
const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="py-0.5 mt-0">
      <Container>
        <Navbar.Brand as={Link} to="/MYPORTFOLIO/">Adam J Fox</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavItemLink to="/MYPORTFOLIO/about" text="About Me" />
            <NavItemLink to="/MYPORTFOLIO/portfolio" text="Portfolio" />
            <NavItemLink to="/MYPORTFOLIO/contact" text="Contact" />
            <NavItemLink to="/MYPORTFOLIO/resume" text="Resume" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const NavItemLink = ({ to, text }) => (
  <Nav.Link as={Link} to={to} className="fs-5 nav-link-highlight shadow-lg">{text}</Nav.Link>
);

export default Navigation;
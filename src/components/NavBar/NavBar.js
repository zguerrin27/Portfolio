import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav, } from 'react-bootstrap'
import './NavBar.css';

function NavBar(props) {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => setExpanded(false)

  return (
    <Navbar id="nav___bar" bg="dark" variant="dark" expand="md" expanded={expanded}>
      <Nav.Link as={Link} onClick={toggle} to="/" id="navbar__brand" >zg</Nav.Link>
      <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto left-nav">              {/* means "marginLeft-auto". could also be mr-auto */}
          <Nav.Link as={Link} onClick={toggle}  to="/about" >About Me</Nav.Link>
          <Nav.Link as={Link} onClick={toggle}  to="/projects" >Projects</Nav.Link>
          <Nav.Link as={Link} onClick={toggle}  to="/skills" >Skills</Nav.Link>
          <Nav.Link as={Link} onClick={toggle}  to="/contact" >Contact Me</Nav.Link>
        </Nav>
        <Nav className="ml-auto right-nav">   
          <Nav.Link onClick={toggle} as={Link} to={{ pathname: "https://github.com/zguerrin27" }} target="_blank"><i className="fab fa-github fa-2x" ></i></Nav.Link>
          <Nav.Link onClick={toggle} as={Link} to={{ pathname: "https://linkedin.com/in/zpg" }} target="_blank"><i className="fab fa-linkedin fa-2x" ></i></Nav.Link>
          <Nav.Link onClick={toggle} as={Link} to={{ pathname: "https://instagram.com/zg603" }} target="_blank"><i className="fab fa-instagram fa-2x" ></i></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;

import { Navbar, Nav, } from 'react-bootstrap'
import './NavBar.css';

function NavBar(props) {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand href="/">zg</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto left-nav">                          {/* means "marginLeft-auto". could also be mr-auto */}
          <Nav.Link href="/about">About Me</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/resume">Resume</Nav.Link>
          <Nav.Link href="/contact">Contact Me</Nav.Link>
        </Nav>
        <Nav className="ml-auto right-nav">                         
          <Nav.Link href="https://github.com/zguerrin27"><i class="fab fa-github fa-2x" ></i></Nav.Link>
          <Nav.Link href="https://linkedin.com/in/zpg"><i class="fab fa-linkedin fa-2x" ></i></Nav.Link>
          <Nav.Link href="https://instagram.com/zg603"><i class="fab fa-instagram fa-2x" ></i></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;

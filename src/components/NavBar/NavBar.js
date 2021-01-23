import { Link } from 'react-router-dom'
import { Navbar, Nav, } from 'react-bootstrap'
import './NavBar.css';

function NavBar(props) {
  return (
    <Navbar id="nav___bar" bg="dark" variant="dark" expand="md">
      <Nav.Link as={Link} to="/" id="navbar__brand" >zg</Nav.Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto left-nav">                          {/* means "marginLeft-auto". could also be mr-auto */}
          <Nav.Link as={Link} to="/about" >About Me</Nav.Link>
          <Nav.Link as={Link} to="/projects" >Projects</Nav.Link>
          <Nav.Link as={Link} to="/skills" >Skills</Nav.Link>
          <Nav.Link as={Link} to="/contact" >Contact Me</Nav.Link>
        </Nav>
        <Nav className="ml-auto right-nav">                         
          <Nav.Link as={Link} to="https://github.com/zguerrin27"><i className="fab fa-github fa-2x" ></i></Nav.Link>
          <Nav.Link as={Link} to="https://linkedin.com/in/zpg"><i className="fab fa-linkedin fa-2x" ></i></Nav.Link>
          <Nav.Link as={Link} to="https://instagram.com/zg603"><i className="fab fa-instagram fa-2x" ></i></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;

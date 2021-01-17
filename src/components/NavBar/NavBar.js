import { Navbar, Nav, } from 'react-bootstrap'
import './NavBar.css';

function NavBar(props) {
  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Navbar.Brand href="/">ZacharyGuerrin</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">                          {/* means "marginLeft-auto". could also be mr-auto */}
          <Nav.Link href="/about">About Me</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/resume">Resume</Nav.Link>
          <Nav.Link href="/contact">Contact Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    // <container className="nav__container">
    //   <Nav className="name__left" activeKey="/">
    //     <Nav.Item>
    //       <Nav.Link href="/">ZachGuerrin</Nav.Link>
    //     </Nav.Item>
    //   </Nav>
    //   <Nav className="nav__right" activeKey="/">
    //     <Nav.Item>
    //       <Nav.Link href="/about" eventKey="link-1">About Me</Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item>
    //       <Nav.Link href="/projects" eventKey="link-2">Projects</Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item>
    //       <Nav.Link href="/resume" eventKey="link-3" >Resume</Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item>
    //       <Nav.Link href="/contact" eventKey="link-4" >Contact Me</Nav.Link>
    //     </Nav.Item>
    //   </Nav>
    // </container>
 
  );
}

export default NavBar;

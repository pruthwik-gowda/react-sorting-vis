import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavBar.css"

const goToBottom = () => {
  window.scrollTo({
      top: 1000,
      behavior: "smooth",
  });
};

function NavBar() {
  return ( 
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container className='navbar-container'>
        <Navbar.Brand href="#home" className='text' >SORTING VIZUALIZER</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link" className='text-links' onClick={goToBottom}>Compare the Algorithms</Nav.Link>
            <Nav.Link href="#link" className='text-links'>Pathfinder Algorithms</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
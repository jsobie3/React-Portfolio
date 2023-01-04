import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Image from 'react-bootstrap/Image'
import { Card, CardImg } from 'react-bootstrap';

import { img1 } from '../images/jakub.jpg'

function TopBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">

        {/* <Navbar.Brand href="#home">Jakub Sobieraj</Navbar.Brand> */}

        <Container>

          <Nav className="navbarRight">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
            <Nav.Link href="./images/jsobieraj_Resume_Dev.docx.pdf">Resume</Nav.Link>
          </Nav>

        </Container>
      </Navbar>
    </>
  );
}

export default TopBar;
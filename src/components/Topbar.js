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
          <Container>
            <Navbar.Brand href="#home">Jakub Sobieraj</Navbar.Brand>
            <div className = 'pic'>
              {/* <Card className ='me'>
              <img src={require('../images/jakub.jpg')} />
              </Card> */}
            </div>
            {/* <CardImg src={img1} alt="Card image" /> */}
            <Nav className="me-auto">
              <Nav.Link href="#Resume">Resume</Nav.Link>
              <Nav.Link href="#Contact">Contact</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>


    
          </Container>
        
       

        </Navbar>

       
      </>
    );
  }
  
  export default TopBar;
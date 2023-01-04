import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'

function PortfolioContainer() {
  return (
    <div className='leftSide'>

      <div className="myCard">
        <img className='myPic' src={require('../images/jakub.jpg')} />
        <div className='aboutMe'>
          <p>
            Hi! My name is Jakub Sobieraj!
            I'm studying to be a full stack dev, but prefer frontend work, and love working with bootstrap!
          </p>
        </div>
      </div>

      <Row xs={1} md={2} className="g-4">

        <div className="rightSide">
          {/* First  one */}
          <div className='portfolioContainers'>
            <Col>
              <Card bg="black">
              <img className='myPic' src={require('../images/gaming grandpas.jpg')} />
                <Card.Body>
                  <Card.Title class='text-white'>Gaming Grandpas</Card.Title>
                  <Card.Text class='text-white'>
                    Gaming Grandpas was my first project that I Collabed on. We took two differnt game APIs and were able to splice data to show the best sale price of games.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </div>



          {/* 2nd one */}
           <div className='portfolioContainers'>
            <Col>
              <Card bg="black">
              <img className='myPic' src={require('../images/bestmen.jpg')} />
                <Card.Body>
                  <Card.Title class='text-white'>The Best Men</Card.Title>
                  
                  <Card.Text class='text-white'>
                    The second project I worked on, I focused on front end development and making a cocktail database display data in a sophisticated manner.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </div>

          {/* 3rd one */}
          <div className='portfolioContainers'>
            <Col>
              <Card bg="black">
              <img className='myPic' src={require('../images/GiftHub.JPG')} />
                <Card.Body>
                  <Card.Title class='text-white'>GiftHub</Card.Title>
                  
                  <Card.Text class='text-white'>
                    The last project I worked on is a gift exchange web app, named GiftHub. The goal is to let users register for events, such as wedding showers or holiday grab bags, and operate through GiftHub.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </div>


          
        </div>

      </Row>
    </div>




  );
}

export default PortfolioContainer;
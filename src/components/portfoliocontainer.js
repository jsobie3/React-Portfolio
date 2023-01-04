import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Image from 'react-bootstrap/Image'

function PortfolioContainer() {
  return (
    <div className='leftSide'>
      <Row xs={1} md={2} className="g-4">




        {/* pic  one */}
        {/* <Card className="myPic"> */}
          <img className='myPic' src={require('../images/jakub.jpg')} />
          <Card.Text>
            Hi! My name is Jakub Sobieraj!
            I'm studying to be a full stack dev, but prefer frontend work, and love working with bootstrap!
          </Card.Text>
        {/* </Card> */}


        {/* First  one */}
        <div className='portfolioContainers'>
          <Col>
            <Card bg="primary">
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Img src="../public/jakub_sobieraj.jpg" alt="Card image" />
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional TEST TEST TEST content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </div>



        {/* 2nd one */}
        <div className='portfolioContainers'>
          <Col>
            <Card bg="primary">
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional TEST TEST TEST content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </div>

        {/* 3rd one */}
        <div className='portfolioContainers'>
          <Col>
            <Card bg="primary">
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional TEST TEST TEST content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </div>


        {/* last one */}
        <div className='portfolioContainers'>
          <Col>
            <Card bg="primary">
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional TEST TEST TEST content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </div>
      </Row>
    </div>




  );
}

export default PortfolioContainer;
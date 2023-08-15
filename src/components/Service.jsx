import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import cardpic from '../assets/physics.png'
import '../App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faReact } from '@fortawesome/free-regular-svg-icons'


const service = () => {
  return (
    <>
      <Container>
        <div className='text-center mt-5'>
          <h1>Our Service</h1>
          <p>We craft digital, graphic and dimensional
            thinking, to create category leading brand experiences that <br />have meaning and
            add a value for our clients.</p>
        </div>
        <div>
          <Row className='text-center mb-5'>
            <Col xs={12} md={4}>
              <Card>
                <Card.Img className='cardimg' variant="top" src={cardpic} />
                <Card.Body>
                  <Card.Title>Digital Design
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the Digital Design
                    and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card>
                <Card.Img className='cardimg' variant="top" src={cardpic} />
                <Card.Body>
                  <Card.Title>Unlimited Colors
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card>
                <Card.Img className='cardimg' variant="top" src={cardpic} />
                <Card.Body>
                  <Card.Title>Unlimited Colors
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className='text-center'>
            <Col xs={12} md={4}>
              <Card>
                <Card.Img className='cardimg' variant="top" src={cardpic} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card>
                <Card.Img className='cardimg' variant="top" src={cardpic} />
                <Card.Body>
                  <Card.Title>Digital Design
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the Digital Design
                    and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card>
                <Card.Img className='cardimg' variant="top" src={cardpic} />
                <Card.Body>
                  <Card.Title>Digital Design
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the Digital Design
                    and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

      </Container>
    </>
  )
}

export default service

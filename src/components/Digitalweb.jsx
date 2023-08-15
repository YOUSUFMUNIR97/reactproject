import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import digitalwebpic from '../assets/online-world.svg'
import Button from 'react-bootstrap/Button';

const Digitalweb = () => {
  return (
    <div className= "mt-5">
      <div className='digitalWeb p-3'>
        <Container>
          <Row className='mt-5'>
            <Col md={6} sm={12} className='mt-5'>
              <h4>A digital web design studio creating
                <br />modern & engaging online <br />experiences</h4>

              <p>
                Separated they live in Bookmarksgrove right at the coast of the
                <br />Semantics, a large language ocean. A small river named Duden
                <br />flows by their place and supplies it with the necessary regelialia.
              </p>
              <ul className='digitallis'>
                <li>
                  We put a lot of effort in design.
                </li>
                <li>
                  The most important ingredient of successful website.
                </li>
                <li>
                  Sed ut perspiciatis unde omnis iste natus error sit.
                </li>
                <li>
                  Submit Your Organization.
                </li>
              </ul>

              <Button variant="danger" className="ms-auto">Learn More</Button>{' '}
            </Col>
            <Col md={6} sm={12}>
            <img src={digitalwebpic} width='100%'></img>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Digitalweb
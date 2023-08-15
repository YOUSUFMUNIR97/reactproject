import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';


const Foam = () => {
    return (
        <>
            <div>
                <Container className='mt-5'>
                    <div className='text-center my-5'>
                        <h1>Get In Touch</h1>
                        <p>We craft digital, graphic and dimensional
                            thinking, to create category leading brand experiences that <br />have meaning and
                            add a value for our clients.</p>
                    </div>
                    <Row>
                        <Col md={4} xs={12}>
                            <h6>Office Address 3:</h6>
                            <p>4463 Cedar Street Moro, AR 72368</p>

                            <h6>Office Address 2:</h6>
                            <p>2467 Swick Hill Street
                                New Orleans, LA 70171</p>

                            <h6>Working Hours:</h6>
                            <p>9:00AM To 6:00PM</p></Col>

                        <Col>
                            <Row md={8} xs={12}>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Name" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Control type="email" placeholder="Your Email" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Control type="email" placeholder="Your Subject" />
                                </Form.Group>
                            </Row>
                            <Row>
                                <InputGroup size="lg" className='mb-3' height="170px">
                                    <textarea name="postContent" rows={4} cols={60} placeholder="Your Message" />
                                </InputGroup>
                            </Row>
                            <Col>

                            </Col>
                            <Col>
                                <Button variant="danger" className="ms-auto">Learn More</Button>{' '}
                            </Col>

                        </Col>
                    </Row>
                </Container >
            </div >
        </>
    )
}

export default Foam

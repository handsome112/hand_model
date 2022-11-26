import { useState, useRef, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// import './style.css';
import './admin.css';

function Admin() {

    return (
        <>
            <div>
                <Container>
                    <Row>
                        <div className='top_space'></div>
                    </Row>
                    <Row>
                        <div className='top_space'></div>
                    </Row>
                    <Row>
                        <Col sm={12} md={4}>
                            <h2>Please Select Height.</h2>
                        </Col>
                        <Col sm={12} md={8}>
                            <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row>
                        <div className='top_space'></div>
                    </Row>

                    <Row>
                        <Col sm={12} md={4}>
                            <h2>Please Select Ethnic origin.</h2>
                        </Col>
                        <Col sm={12} md={8}>
                            <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row>
                        <div className='top_space'></div>
                    </Row>

                    <Row>
                        <Col sm={12} md={4}>
                            <h2>Please Select Gender.</h2>
                        </Col>
                        <Col sm={12} md={8}>
                            <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row>
                        <div className='top_space'></div>
                    </Row>

                    <Row>
                        <Col sm={12} md={4}>
                            <h2>Please Select Shoes size.</h2>
                        </Col>
                        <Col sm={12} md={8}>
                            <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row>
                        <div className='top_space'></div>
                    </Row>

                    <Row>
                        <Col sm={12} md={4}>
                            <h2>Please Select Availability.</h2>
                        </Col>
                        <Col sm={12} md={8}>
                            <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row>
                        <div className='top_space'></div>
                    </Row>

                    <Row>
                        <Col sm={12} md={4}>
                            <h2>Please Select Experience.</h2>
                        </Col>
                        <Col sm={12} md={8}>
                            <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row>
                        <div className='top_space'></div>
                    </Row>




                    <div className='form-btns'>
                        <Row>
                            <Col sm={12} md={4}>
                                <Button className='add-btn' variant="success">Add One Model</Button>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Admin;
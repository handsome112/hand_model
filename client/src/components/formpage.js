import { useState, useRef, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Envelope } from 'react-bootstrap-icons';
import LoginModal from "react-login-modal";

import './style.css';

function FormPage() {

    return (
        <>
            <Container>
                <Row>
                    <div className='top_space'></div>
                </Row>
                <Row>
                    <div className='top_space'></div>
                </Row>
                <Row>
                    <div  className='from_title'>
                        <h2>Items to fill in</h2>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default FormPage;
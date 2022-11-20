import { useState, useRef, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Envelope } from 'react-bootstrap-icons';
import LoginModal from "react-login-modal";


import './style.css';

function ShowPage() {

    let i = 12;

    const itemLists = [
        { id: 1, text: "Female Hand" },
        { id: 2, text: "Male Hands" },
        { id: 3, text: "Female Legs" },
        { id: 4, text: "Male Legs" },
        { id: 5, text: "Female Eyes" },
        { id: 6, text: "Male Eyes" },
        { id: 7, text: "Female Body" },
        { id: 8, text: "Male Body" },
        { id: 9, text: "Female Feet" },
        { id: 10, text: "Male Feet" },
        { id: 11, text: "Lips" },
        { id: 12, text: "Manicurists" },
    ];

    const btnLists = [
        { id: 1, text: "About handmodels.co.uk" },
        { id: 2, text: "Join our agency" },
        { id: 3, text: "Favorites" },
        { id: 4, text: "Client Temrms" },
        { id: 5, text: "Model Terms" },
        { id: 6, text: "Privacy Police" },
        { id: 7, text: "Contact us" },
    ];

    return (
        <>
            <Container>
                <Row>
                    <div className='top_space'></div>
                </Row>
                <Row>
                    <Col xs={12} md={8} >
                        <div className='logo_imgs'>
                            <img src='logo.png' />
                            <img src='co.png' />
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className='frame'>
                            <Row>
                                <Col xs={8} >
                                    <div className='inbox'>
                                        APPLY FORM
                                    </div>
                                </Col>
                                <Col xs={4}>
                                    <Envelope color='#186994' size='25' />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className='top_space'></div>
                </Row>
                <div className='button_group'>
                    <Row>
                        {itemLists.map((todo) => (
                            <Col xs={12} sm={6} md={4} lg={3} xl={1}>
                                <div key={todo.id} className='each_btn'>
                                    {todo.text}
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
                <div className='main_container'>
                    <div className='password_checker'>
                        <Row>
                            <Col xs={12} >
                                <div className='inbox'>
                                    <b>This area is password protected</b>
                                    <p>Please enter the password below</p>
                                    <form className='form_1'>
                                        <input type='password' className='sub_text' />
                                        <div>Login</div>
                                    </form>
                                    <div className='top_space'></div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className='footer_btns'>
                        {btnLists.map((btnlist) => (
                                <button>{btnlist.text}</button>
                        ))}

                </div>
            </Container>
        </>
    )
}

export default ShowPage;
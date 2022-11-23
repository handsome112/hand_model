import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown, Offcanvas, Form, FormControl, Button, Row, Col } from 'react-bootstrap';


import './style.css';


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
    { id: 4, text: "Client Terms" },
    { id: 5, text: "Model Terms" },
    { id: 6, text: "Privacy Policy" },
    { id: 7, text: "Contact us" },
];


function NavBar() {

    const openNav = async () => {
        document.getElementById("myNav").style.width = "100%";
    }

    const closeNav = async () => {
        document.getElementById("myNav").style.width = "0%";
    }
    return (
        <>
            <Container>
                <div className='title_container'>
                    <div className='title_logo font-face-tg'>
                        <a href='https://HANDMODELS.CO.UK'>
                            <b className='title_logo_hand'>HAND</b><b>MODELS.CO.UK</b>
                        </a>
                    </div>
                    <div className="curtainspan" onClick={openNav}>&#9776;</div>
                </div>
                <div id="myNav" className="overlay">
                    <div className='modal_title'>
                        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>

                        <Row>
                            <div className='top_space'></div>
                        </Row>
                        <Row>
                            <div className='top_space'></div>
                        </Row>
                        <Row>
                            <div className='top_space'></div>
                        </Row>
                        <Row>
                            <div className='curtain_line'>
                                {itemLists.map((todo) => (
                                    <div key={todo.id} className='curtain_headline'>
                                        {todo.text}
                                    </div>
                                ))}
                            </div>
                        </Row>
                        <div className='blank'></div>

                        <Row>
                            <div className='curtain_line'>
                                {btnLists.map((item, k) => (
                                    <div key={item.id} className='curtain_footline' >
                                        {item.text}
                                    </div>
                                ))}
                            </div>
                        </Row>
                    </div>
                </div>
            </Container >
        </>
    );
}
export default NavBar;  
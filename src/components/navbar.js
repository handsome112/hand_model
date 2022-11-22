import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown, Offcanvas, Form, FormControl, Button } from 'react-bootstrap';

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


function NavBar() {
    return (
        <>
            <Navbar bg="transparent" className="color-nav navbar-right" color="white" variant = "dark" expand={false}>
                <Container fluid>
                    <Navbar.Brand href="#">
                        <div className='title_logo font-face-tg'>
                            <a href='https://HANDMODELS.CO.UK'>
                                <b className='title_logo_hand'>HAND</b><b>MODELS.CO.UK</b>
                            </a>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                        offcanvas-bg-color='green'
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Items for Model</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                {itemLists.map((item, k) => (
                                    <Nav.Link href= { "#action" + k}>{item.text}</Nav.Link>
                                ))}
                                {/* <Nav.Link href="#action1">Sidear Item1</Nav.Link>
                                <Nav.Link href="#action2">Sidebar Item 2</Nav.Link>
                                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                                    <NavDropdown.Item href="#action3">Dropdown Item 1</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Dropdown Item 2</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Divided Item
                                    </NavDropdown.Item>
                                </NavDropdown> */}
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}
export default NavBar;  
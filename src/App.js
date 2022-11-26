import { useState, useRef, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { FaBars } from "react-icons/fa";
import LoginModal from "react-login-modal";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ShowPage from './components/showpage';
import FormPage from './components/formpage';
import NavBar from './components/navbar';
import Admin from './components/admin';

import { Link } from "react-router-dom";


const Button = styled.button`
  background: #FF5555;
  border-radius: 40px 10px 10px 10px;
  border: 1px solid #FF5555;
  color: white;
  margin: 0.5em 1em;
  padding: 0.35em 2em;
  font-size: 20px;
  float:right;
  cursor:pointer;
`;

function App() {

  const [Auth, setAuth] = useState(true);
  return (
    <div className="App">

      {Auth ? (
        <Dashboard />
      ) : (
        // <Dashboard/>
        <Passpanel />    //here does not pass at all !!!  ignore it !!
      )}

    </div>
  );
}

function Passpanel() {
  return (
    <>
      <Container>
        <div className='title_logo font-face-tg'><b className='title_logo_hand'>HAND</b><b>MODELS.CO.UK</b></div>
        <div>
          <LoginModal />
        </div>
      </Container>
    </>
  )
}

function Dashboard() {
  const [join, setJoin] = useState(false);
  const [menuShow, setMenuShow] = useState(false);

  const clickMe = async () => {
    setJoin(true);
  }

  const setHamburgerShow = async () => {
    setMenuShow(true);
  }

  return (
    <>
      {join == true ? (
        <>
          <div className='page'>
            <NavBar />
            <Admin />
          </div>
        </>
        // <FormPage />
      ) : (
        <>
          {/* {menuShow && (<Container><NavBar /></Container>)} */}
          <div className='first_page'>
            <Container>
              <div className='mt-5vh'>
                <NavBar />
              </div>
              <Row>

              </Row>

              <div className='main_slogan font-face-ms'>
                <div className='hand_div'>HAND</div>
                <div className='model_div'>MODEL</div>
                <div className='agency_div'>AGENCY</div>
              </div>
              <div className='apply_join'>
                {/* <Link to={'/admin'}> */}
                <Button onClick={clickMe}>Apply to Join</Button>
                {/* </Link> */}
              </div>
            </Container>
          </div>
        </>
      )}
    </>
  )
}


export default App;

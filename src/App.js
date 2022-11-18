import { useState, useRef, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { FaBars } from "react-icons/fa";
import LoginModal from "react-login-modal";

const Button = styled.button`
  background: #FF5555;
  border-radius: 40px 10px 10px 10px;
  border: 1px solid #FF5555;
  color: white;
  margin: 0.5em 1em;
  padding: 0.35em 2em;
  font-size: 20px;
  float:right;
`;

function App() {

  const [Auth, setAuth] = useState(false);
  return (
    <div className="App">
      <div className='container'>
        {Auth ? (
          <Login/>
        ):(
          // <Dashboard/>
          <Passpanel/>
        )}
        
      </div>
    </div>
  );
}

function Login() {
  return (
    <h1>LOG IN</h1>
  )
}

function Passpanel() {
  return (
    <>
      <div className='title_logo font-face-tg'><b className='title_logo_hand'>HAND</b><b>MODELS.CO.UK</b></div>
      <div>
        <LoginModal/>
      </div>
    </>
  )
}

function Dashboard() {
  return (
    <>
      <div className='top_right_icon'>
        <FaBars style={{color: 'white', fontSize: '40px'}}/>  
      </div>
      <div className='title_logo font-face-tg'><b className='title_logo_hand'>HAND</b><b>MODELS.CO.UK</b></div>
      <div className='main_slogan font-face-ms'>
        <div className='hand_div'>HAND</div>
        <div className='model_div'>MODEL</div>
        <div className='agency_div'>AGENCY</div>
      </div>
      <div className='apply_join'>
        <Button onClick={clickMe}>Apply to Join</Button>
      </div>
    </>
  )
}
function clickMe() {
  alert("You clicked me!");
}

export default App;

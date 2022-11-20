import { useState, useRef, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { FaBars } from "react-icons/fa";
import LoginModal from "react-login-modal";
import ShowPage from './components/showpage';


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
      <div className='first_page'>
        {Auth ? (
          <Dashboard />
        ) : (
          // <Dashboard/>
          <Passpanel />
        )}

      </div>
    </div>
  );
}

function Passpanel() {
  return (
    <>
      <div className='title_logo font-face-tg'><b className='title_logo_hand'>HAND</b><b>MODELS.CO.UK</b></div>
      <div>
        <LoginModal />
      </div>
    </>
  )
}

function Dashboard() {
  const [join, setJoin] = useState(false);

  const clickMe = async () => {
    setJoin(true);
  }

  // if(join)
  // {
  //   return 
  //   (
  //     // <ShowPage />
  //     <h2>123123123</h2>
  //   )
  // }
  // else
  return (
    <>
      {join == true ? (
        <ShowPage />
      ) : (
        <>
          <div className='top_right_icon'>
            <FaBars style={{ color: 'white', fontSize: '30px' }} />
          </div>
          <div className='title_logo font-face-tg'><a href='https://HANDMODELS.CO.UK'><b className='title_logo_hand'>HAND</b><b>MODELS.CO.UK</b></a></div>
          <div className='main_slogan font-face-ms'>
            <div className='hand_div'>HAND</div>
            <div className='model_div'>MODEL</div>
            <div className='agency_div'>AGENCY</div>
          </div>
          <div className='apply_join'>
            <Button onClick={clickMe}>Apply to Join</Button>
          </div>
        </>
      )}
    </>
  )
}

// function clickMe() {
//   // alert("You clicked me!");
//   // setJoin(true);

//   return (
//     <ShowPage />
//   );
// }

export default App;

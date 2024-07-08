import React from 'react'
import { Link } from "react-router-dom";
import Wrapper from '../assets/wrapper/LandingPage'


const Landing = () => {

  return (
    <Wrapper>
      <nav>
      </nav>
      <div className='container page'>
        <div className='info'>

          <h1>Welcome to <span> Fugitive Capture </span>game </h1>

          <Link to="/login" className="btn">
            Login to Start Game
          </Link>
        </div>

      </div>
    </Wrapper>
  );
};


export default Landing
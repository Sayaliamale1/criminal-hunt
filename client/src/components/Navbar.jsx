import React, { useState } from 'react'
import Wrapper from '../assets/wrapper/Navbar'
import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Navbar = () => {

  return (
    <Wrapper>
      <div className='nav-center'>
  <div >
                <button className="btn">
                Logout
                  </button>
            </div>
   <Link to="/">
   <h4>Criminal Case</h4>
   </Link>
        
        <div className="btn-container">
          <button
            type="button"
            className="btn logout-btn" >
              <FaUserCircle/>
            <FaCaretDown />
          </button>
        </div>
      </div>



    </Wrapper>
  )
}

export default Navbar
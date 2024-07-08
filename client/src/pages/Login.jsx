import React, { useState,useEffect } from 'react'
import axios from 'axios';
import Wrapper from '../assets/wrapper/Login'
import { useNavigate,useLocation } from 'react-router-dom';


const Login = () => {
  const [cops, setCops] = useState([]);
    const [selectedCop, setSelectedCop] = useState('cop1');
    const navigate = useNavigate();
      const location = useLocation();
//   const { selectedCop } = location.state || {};

      useEffect(() => {
    axios.get('https://criminal-hunt-backend.onrender.com/cops').then(response => {
        console.log(response.data);
      setCops(response.data);
      
    });
  }, []);
 const handleCopSelection = () => {
        
        navigate('/cityselection',{ state: {selectedCop }}  );
    };

    return (
        <Wrapper>
            <div className="form" >
                <h4>Lets Play!</h4>
                <div className="form-row">
                    <label className="form-label">
                        Select a Cop :
                        <select className='form-select'
                            name="selectedCop" value={selectedCop} onChange={(e) => setSelectedCop(e.target.value)}>
                             {cops.map(name => (
                <option key={name.cop} value={name.cop}>
                  {name.cop}
                </option>
              ))}
                        </select>
                    </label>
                </div>
                <button onClick={handleCopSelection} className="btn btn-block" >
                    Next
                </button>
          </div>

        </Wrapper>
    )
}

export default Login
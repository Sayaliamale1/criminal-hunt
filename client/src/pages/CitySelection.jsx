import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import Wrapper from '../assets/wrapper/CitySelection';

const CitySelection = () => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('Yapkashnagar');
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedCop } = location.state || {} ; // Handle case where location.state might be null


  useEffect(() => {
    axios.get('https://criminal-hunt-backend.onrender.com/cities').then(response => {
      setCities(response.data);
      
    });
  }, []);

  const handleLocationSelection = () => {
    console.log("cop",selectedCop);
    navigate('/vehicleselection', { state: { selectedCop, selectedCity } });
  };


  return (
    <Wrapper>
      <form className="form" onSubmit={handleLocationSelection}>

        <div>
          <label className="form-label">
            Select a Location :
            <select className='form-select' name="selectedCity" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
              {cities.map(city => (
                <option key={city.name} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </label>
          <button type='submit' className="btn btn-block">Next</button>
        </div>
      </form>
    </Wrapper>
  );
};

export default CitySelection;

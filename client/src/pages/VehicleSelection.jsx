import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';


const VehicleSelection = () => {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState('EV Bike');
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedCop, selectedCity } = location.state || {}; // Handle case where location.state might be null


  useEffect(() => {
    axios.get('https://criminal-hunt-backend.onrender.com/vehicles').then(response => {
      setVehicles(response.data);
      console.log(response.data);
    });
  }, []);

  const handleVehicleSelection = () => {
    console.log(selectedCop);
    const copChoices = [
      { name: selectedCop, city: selectedCity, vehicle: selectedVehicle }
    ];
    axios.post('https://criminal-hunt-backend.onrender.com/capture', { copChoices }).then(response => {
      navigate('/result', { state:{ result:response.data} });
    })
    .catch(error => {
  alert(error);
  
    });
  };

  return (
    
    <div className="form">
      <h2 className="form-label">
            Select a Vehicle : </h2>
      <select className='form-select' name="selectedVehicle" value={selectedVehicle} onChange={(e) => setSelectedVehicle(e.target.value)}>
        {vehicles.map(vehicle => (
          <option key={vehicle.vehicleModel} value={vehicle.vehicleModel}>
            {vehicle.vehicleModel}
          </option>
        ))}
      </select>
  
      <button className="btn btn-block" onClick={handleVehicleSelection}>Next</button>
    </div>
  );
};

export default VehicleSelection;

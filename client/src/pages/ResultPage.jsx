import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const ResultPage = () => {
  const location = useLocation();
  const { result } = location.state || {}; // Handle case where location.state might be null

     console.log("vehicle: ",result);

  if (!result) {
    // If result is not available, redirect to the select cop page
    return (
      <div>
        <h2 className='h2-result' >Error</h2>
        <p className='h2-result'>No result found. Please start the game again.</p>
        <Link to="/cityselection">
          <button className="btn btn-block">Play Again</button>
        </Link>
      </div>
    );
  }

  return (
    <div className='result'>
      <h2 className='h2-result'>Result</h2>
      {result.success ? (
        <p className='h2-result'>Success! {result.capturingCop} captured the fugitive!</p>
      ) : (
        <p className='h2-result'>Unfortunately, the fugitive escaped.</p>
      )}
      <Link to="/login">
        <button className="btn h2-result btn-block">Play Again</button>
      </Link>
    </div>
  );
};

export default ResultPage;

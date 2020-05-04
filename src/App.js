import React from 'react';
import moonlight from './moonlight.jpg';
import './App.css';

function App() {
  return (


    <div className="container">

        <div className="movie-cover"><img src={moonlight}  alt="moonlight cover"/></div>
        <br></br>
        <br></br>
        <br></br>
        
    
        <div className="flex-items">
          <div className="movies"><h2>Moonlight</h2></div>
          <div className="movies"><h2>The Southern Rail experience</h2></div>
          <div className="movies"><h2>Much Ado About Nothing</h2></div>
        </div>

        <div className="flex-items">
          <div className="movies"><h2>Joker</h2></div>
          <div className="movies"><h2>Inherent Vice</h2></div>
          <div className="movies"><h2>Underwater</h2></div>
        </div>  

    </div>
  );
}

export default App;

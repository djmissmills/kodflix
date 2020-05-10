import React from 'react';
import moonlight from './images/moonlight.jpg';
import southern from './images/rail.jpg';
import much from './images/much.jpg';
import joker from './images/joker.jpg';
import inherent from './images/inherent.jpg';
import underwater from './images/underwater.jpg';
import './App.css';

function App() {
  return (

// app
    <div className="container">



      <div className="row">
        <div className="movies">
          <img src={moonlight} alt="moonlight cover" />
          <div class="overlay">
            <h2>Moonlighting</h2>
          </div>
        </div>

        <div className="movies">
          <img src={southern} alt="southern cover" />
          <div class="overlay">
            <h2>The experience</h2>
          </div>
        </div>

        <div className="movies">
          <img src={much} alt="much cover" />
          <div class="overlay">
            <h2>Much Ado</h2>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="movies">
          <img src={joker} alt="joker cover" />
          <div class="overlay">
            <h2>Joker</h2>
          </div>
        </div>

        <div className="movies">
          <img src={inherent} alt="inherent cover" />
          <div class="overlay">
            <h2>Inherent Vice</h2>
          </div>
        </div>

        <div className="movies">
          <img src={underwater} alt="underwater cover" />
          <div class="overlay">
            <h2>Underwater</h2></div>
        </div>
      </div>
    </div>
  );
}

export default App;

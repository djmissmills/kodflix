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


    <div className="container">
      <div className="row">
        <div className="movies">
          <img src={moonlight} alt="moonlight cover" />
          <h2>Moonlight</h2>
        </div>

        <div className="movies">
          <img src={southern} alt="southern cover" />
          <h2>The Southern Rail experience</h2>
        </div>

        <div className="movies">
          <img src={much} alt="much cover" />
          <h2>Much Ado About Nothing</h2>
        </div>
      </div>

      <div className="row">
        <div className="movies">
          <img src={joker} alt="joker cover" />
          <h2>Joker</h2>
        </div>

        <div className="movies">
          <img src={inherent} alt="inherent cover" />
          <h2>Inherent Vice</h2>
        </div>

        <div className="movies">
          <img src={underwater} alt="underwater cover" />
          <h2>Underwater</h2></div>
      </div>

    </div>
  );
}

export default App;

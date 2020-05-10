import React from 'react';
import MovieItem from './MovieItem';
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
        <MovieItem name="moonlight" logo={moonlight}/>
        <MovieItem name="The Experience" logo={southern}/>
        <MovieItem name="Much A Doo" logo={much}/>
      </div>

      <div className="row">
        <MovieItem name="Joker" logo={joker}/>
        <MovieItem name="Inherent" logo={inherent}/>
        <MovieItem name="Underwater" logo={underwater}/>
      </div>
    </div>
  );
}







export default App;

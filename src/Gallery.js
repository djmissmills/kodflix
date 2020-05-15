import React from 'react';
import MovieItem from './MovieItem';
import moonlight from './images/moonlight.jpg';
import southern from './images/rail.jpg';
import much from './images/much.jpg';
import joker from './images/joker.jpg';
import inherent from './images/inherent.jpg';
import underwater from './images/underwater.jpg';




export default function Gallery(){
    return(
      <div>
        <div className="row">
          <MovieItem id='moonlight'name="moonlight" logo={moonlight}/>
          <MovieItem id='experience'name="The Experience" logo={southern}/>
          <MovieItem id='much'name="Much A Doo" logo={much}/>
          <MovieItem id='joker'name="Joker" logo={joker}/>
          <MovieItem id='inherent'name="Inherent" logo={inherent}/>
          <MovieItem id='underwater'name="Underwater" logo={underwater}/>
        </div>
      </div>
    );
  }
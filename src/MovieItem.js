import React from 'react';

export default function MovieItem(props) {
    return (
    <div className="movies">
      <img src={props.logo} alt={props.name + ' cover'}/>
      <div class="overlay">
        <h2>{props.name}</h2>
      </div>
    </div>
    );
  }
  
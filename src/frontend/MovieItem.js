import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieItem(props) {
    return (
    <Link to={'/' + props.id} className="movies">
      <img src={props.logo} alt={props.name + ' cover'}/>
      <div class="overlay">
        <h2>{props.name}</h2>
      </div>
    </Link>
    );
  }
  
import React from 'react';
import MovieItem from './MovieItem';
import getGallery from './get-gallery';
import { render } from '@testing-library/react';



export default class Gallery extends React.Component {
  

componentDidMount() {
  fetch('/rest/shows')
    .then(function (response) {
        return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
    });
}  
   
  render() {
    return (
      <div>
        <div className="row"> {
                getGallery().map(item => {
                  return (
                    <MovieItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        logo={item.logo}/>
                );
            })
          }
        </div>
      </div>
    );
  }
}

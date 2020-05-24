import React from 'react';
import MovieItem from './MovieItem';
import getGallery from './get-gallery';




export default function Gallery(){
    return(
      <div>
        <div className="row">
            {
                getGallery().map(item => (
                    <MovieItem 
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        logo={item.logo}/>
                ))
        }
        </div>
      </div>
    );
  }



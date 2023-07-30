import React from 'react';

const Movie= ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movie" key={imdbID}>
      <div>
        <p style={{color:'#EEEDED',backgroundColor:'#404258',textAlign:'center'}}>{Year}</p>
      </div>

      <div className='wid'>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div style={{backgroundColor:'#474E68'}}>
        <span style={{color:'#EEE2DE'}}>{Type}</span>
        <h3 style={{color:'black'}}>{Title}</h3>
      </div>
    </div>
  );
}

export default Movie;
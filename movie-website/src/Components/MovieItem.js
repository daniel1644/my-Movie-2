import React, { useState } from 'react';

const MovieItem = ({ movie }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <img src={movie.image} alt={movie.name} />
      <h2>{movie.name}</h2>
      <button onClick={toggleDetails}>{showDetails ? 'Hide Details' : 'Show Details'}</button>
      {showDetails && (
        <div>
          <p>Description: {movie.description}</p>
          <p>Genre: {movie.genre}</p>
        </div>
      )}
    </div>
  );
};

export default MovieItem;

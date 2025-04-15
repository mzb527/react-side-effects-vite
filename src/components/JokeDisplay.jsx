import React from 'react';

function JokeDisplay({ joke, loading, error }) {
  return (
    <div className="joke-display">
      {loading ? (
        <p>Loading...</p> // Show loading message
      ) : error ? (
        <p>Error: {error}</p> // Show error message
      ) : (
        <p>{joke}</p> // Show the fetched joke
      )}
    </div>
  );
}

export default JokeDisplay;
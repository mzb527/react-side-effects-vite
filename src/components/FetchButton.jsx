import React from 'react';

function FetchButton({ fetchJoke }) {
  return <button onClick={fetchJoke}>New Joke</button>;
}

export default FetchButton;
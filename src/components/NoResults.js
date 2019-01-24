import React from 'react';

<<<<<<< HEAD
const NoResults = ( {topic} ) => {
  return (
    <div className="not-found">
      <h2>No Results Found</h2>
      <p>Your search for "{topic}" did not return any results. Please try again.</p>
    </div>
=======
const NoResults = () => {
  return (
    <li className="not-found">
      <h3>No Results Found</h3>
      <p>You search did not return any results. Please try again.</p>
    </li>
>>>>>>> a3628cb6e5e011010e6339e79bd70ab6f1ad30d1
  );
}

export default NoResults;

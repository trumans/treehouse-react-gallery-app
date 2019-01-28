import React from 'react';

const NoResults = ( {search} ) => {
  return (
    <div className="not-found">
      <h2>No Results Found</h2>
      <h3>Your search for "{search}" did not return any results. Please try again.</h3>
    </div>
  );
}

export default NoResults;

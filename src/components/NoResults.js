import React from 'react';

const NoResults = ( {search} ) => {
  return (
    <div className="not-found">
      <h2>No Results Found</h2>
      <p>Your search for "{search}" did not return any results. Please try again.</p>
    </div>
  );
}

export default NoResults;

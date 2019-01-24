import React from 'react';

const NoResults = ( {topic} ) => {
  return (
    <div className="not-found">
      <h2>No Results Found</h2>
      <p>Your search for "{topic}" did not return any results. Please try again.</p>
    </div>
  );
}

export default NoResults;

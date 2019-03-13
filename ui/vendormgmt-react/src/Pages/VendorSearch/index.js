import React from 'react';
import PropTypes from 'prop-types';

const SearchResultPage = (props) => {
  return (
    <>
      <h1>Search Results</h1>
      <h2>&ldquo;{props.searchTerms}&rdquo;</h2>
    </>
  );
};

SearchResultPage.prototypes = {
  searchTerms: PropTypes.string,
  searchResults: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string,
    name: PropTypes.string,
    location: PropTypes.string,
    isActive: PropTypes.bool
  }))
};

export default SearchResultPage;

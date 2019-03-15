import React from 'react';
import PropTypes from 'prop-types';
import ResultsGrid from '../../Components/VendorSearch/resultGrid';

const SearchResultPage = (props) => {
  const {searchTerms, searchResults} = props;

  return (
    <>
      <h1>Search Results</h1>
      <h2>&ldquo;{searchTerms}&rdquo;</h2>
      <ResultsGrid items={searchResults} />
    </>
  );
};

SearchResultPage.prototypes = {
  searchTerms: PropTypes.string,
  searchResults: PropTypes.array
};

export default SearchResultPage;

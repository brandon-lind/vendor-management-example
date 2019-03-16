import React from 'react';
import PropTypes from 'prop-types';
import ResultsGrid from '../../Components/VendorSearch/resultGrid';

const SearchResultPage = props => {
  const { searchTerms, searchResults } = props;

  return (
    <div className="search-results">
      <div className="bg-light border-bottom mb-3 p-1">
        <small>Search Results</small>
        <p className="m-0 h5">{searchTerms}</p>
      </div>
      <ResultsGrid items={searchResults} />
    </div>
  );
};

SearchResultPage.prototypes = {
  searchTerms: PropTypes.string,
  searchResults: PropTypes.array
};

export default SearchResultPage;

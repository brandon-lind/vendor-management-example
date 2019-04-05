import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import ResultsGrid from '../../Components/VendorSearch/resultGrid';

const SearchResultPage = props => {
  const { searchTerms, searchResults } = props;

  return (
    <div className="search-results">
      <div className="bg-light border-bottom mb-3 p-1">
        <small>Search Results</small>
        <p className="m-0 h5">{searchTerms}</p>
      </div>
      <ResultsGrid items={searchResults || []} />
    </div>
  );
};

const mapStateToProps = state => ({
  searchResults: state.search.vendors
});

export default compose(
  withRouter,
  connect(mapStateToProps)
)(SearchResultPage);

import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import ResultsGrid from '../../Components/VendorSearch/resultGrid';

const SearchResultPage = props => {
  const { isSearching, searchTerms, searchResults } = props;

  const renderView = () => {
    if (isSearching) {
      return (
        <div className="p-5 text-center">
          <i className="fa fa-spinner fa-5x fa-spin" />
        </div>
      );
    }

    if (searchResults.length) {
      return (
        <>
          <div className="bg-light border-bottom mb-3 p-1">
            <small>Search Results</small>
            <p className="m-0 h5">{searchTerms}</p>
          </div>
          <ResultsGrid items={searchResults || []} />
        </>
      );
    }
    return <h1 className="p-5">You should try searching for vendors.</h1>;
  };

  return <div className="search-results">{renderView()}</div>;
};

const mapStateToProps = state => ({
  isSearching: state.search.vendors.isSearching,
  searchResults: state.search.vendors.results,
  searchTerms: state.search.vendors.terms
});

export default compose(
  withRouter,
  connect(mapStateToProps)
)(SearchResultPage);

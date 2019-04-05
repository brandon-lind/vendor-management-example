import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button, Form, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { searchAction } from '../../Store/Actions/Vendors';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.searchTerms = '';
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    const { value } = e.target;

    this.searchTerms = value;
  };

  handleSubmit = e => {
    const { onSearch, searchVendors } = this.props;

    e.preventDefault();

    searchVendors(this.searchTerms);

    if (onSearch) {
      onSearch();
    }
  };

  render() {
    const { searchTerms } = this.searchTerms;

    return (
      <Form onSubmit={e => this.handleSubmit(e)}>
        <InputGroup>
          <Input
            onChange={e => this.handleChange(e)}
            value={searchTerms}
            placeholder="Search..."
            name="searchTerms"
          />
          <InputGroupAddon addonType="append">
            <Button color="primary">
              <i className="fa fa-search" />
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </Form>
    );
  }
}

SearchForm.propTypes = {
  // eslint-disable-next-line react/require-default-props
  onSearch: PropTypes.func
};

const mapStateToProps = state => ({
  searchResults: state.search.vendors
});

const mapDispatchToProps = dispatch => ({
  searchVendors: params => dispatch(searchAction(params))
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SearchForm);

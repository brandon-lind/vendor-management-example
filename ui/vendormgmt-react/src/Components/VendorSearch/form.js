import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button, Form, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { searchAction } from '../../Store/Actions/Vendors';

export class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerms: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = async evt => {
    const { value } = evt.target;

    this.setState({ searchTerms: value });
  };

  handleSubmit = async evt => {
    const { onSearch, searchVendors } = this.props;
    const { searchTerms } = this.state;

    evt.preventDefault();

    await searchVendors(searchTerms);

    if (onSearch) {
      onSearch();
    }
  };

  render() {
    const { searchParams } = this.props;
    const { searchTerms } = this.state;

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
              <i
                className={
                  searchParams.isSearching
                    ? 'fa fa-spinner fa-spin'
                    : 'fa fa-search'
                }
                aria-hidden="true"
              />
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
  searchParams: state.search.vendors
});

const mapDispatchToProps = dispatch => ({
  searchVendors: async params => dispatch(searchAction(params))
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SearchForm);

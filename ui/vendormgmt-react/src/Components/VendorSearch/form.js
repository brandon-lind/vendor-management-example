import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, InputGroup, InputGroupAddon, Input } from 'reactstrap';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerms: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = async e => {
    const { name, value } = e.target;

    await this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    const { onSearch } = this.props;

    e.preventDefault();

    if (onSearch) {
      onSearch(this.state);
    }
  };

  render() {
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

export default SearchForm;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, InputGroupAddon, Input } from 'reactstrap';

class SearchForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      searchTerms: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = async (e) => {
    const {target} = e;
    const name = target.name;
    const value = target.value;

    await this.setState({
      [name]: value
    });

  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  };

  render() {
    const {searchTerms} = this.state;

    return (
        <Form onSubmit={(e) => this.handleSubmit(e) }>
            <FormGroup>
              <Input placeholder="Search..." name="searchTerms" value={searchTerms} onChange={(e) => {this.handleChange(e)}} />
              <InputGroupAddon addonType="append">
                <Button color="primary">Go</Button>
              </InputGroupAddon>
            </FormGroup>
        </Form>
      );
    };
};

SearchForm.propTypes = {
  onSearch: PropTypes.func
};

export default SearchForm;

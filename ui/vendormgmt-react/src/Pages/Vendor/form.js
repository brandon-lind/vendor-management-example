import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Button, Input, CustomInput, Label } from 'reactstrap';

class FormPage extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      code: '',
      name: '',
      location: '',
      isActive: false
    };

    this.state = { ...this.initialState };

    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = async e => {
    const { name, type, checked, value } = e.target;
    const val = type === 'checkbox' ? checked : value;

    await this.setState({
      [name]: val
    });
  };

  handleReset = async () => {
    this.setState(() => this.initialState);
  };

  handleSubmit = async e => {
    const { onSave } = this.props;

    e.preventDefault();

    if (onSave) {
      onSave(this.state);
    }

    e.target.reset();
  };

  render() {
    const {
      vendorCode,
      vendorName,
      vendorLocation,
      vendorIsActive
    } = this.props;

    return (
      <div className="search-results">
        <div className="bg-light border-bottom mb-3 p-1">
          <small>Vendor</small>
          <p className="m-0 h5">{vendorCode ? vendorName : 'Add a Vendor'}</p>
        </div>
        <div className="card">
          <div className="card-header">Basic Information</div>
          <div className="card-body">
            <Form
              onSubmit={e => this.handleSubmit(e)}
              onReset={e => this.handleReset(e)}
            >
              <FormGroup>
                <Label for="vendorCode">Code</Label>
                <Input
                  onChange={e => this.handleChange(e)}
                  value={vendorCode}
                  placeholder="Code..."
                  name="code"
                  id="vendorCode"
                />
              </FormGroup>
              <FormGroup>
                <Label for="vendorName">Name</Label>
                <Input
                  onChange={e => this.handleChange(e)}
                  value={vendorName}
                  placeholder="Name..."
                  name="name"
                  id="vendorName"
                />
              </FormGroup>
              <FormGroup>
                <Label for="vendorLocation">Location</Label>
                <Input
                  onChange={e => this.handleChange(e)}
                  value={vendorLocation}
                  placeholder="Location..."
                  name="location"
                  id="vendorLocation"
                />
              </FormGroup>
              <FormGroup>
                <CustomInput
                  onChange={e => this.handleChange(e)}
                  type="switch"
                  checked={vendorIsActive}
                  name="isActive"
                  id="vendorIsActive"
                  label="Is Active?"
                />
              </FormGroup>

              <Button type="reset" color="secondary" className="mr-1">
                Reset
              </Button>
              <Button type="submit" color="primary">
                Save
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

FormPage.prototypes = {
  vendor: PropTypes.shape({
    code: PropTypes.string,
    name: PropTypes.string,
    location: PropTypes.string,
    isActive: PropTypes.bool
  })
};

export default FormPage;

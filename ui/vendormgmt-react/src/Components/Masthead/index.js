/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import VendorSearchForm from '../VendorSearch/form';
import './index.css';
import logo from '../../Assets/logo.png';

export class Masthead extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.showSearchResults = this.showSearchResults.bind(this);

    this.state = {
      isOpen: false
    };
  }

  toggle() {
    const { isOpen } = this.state;

    this.setState({
      isOpen: !isOpen
    });
  }

  showSearchResults() {
    const { history } = this.props;

    history.push('/');
  }

  render() {
    const { isOpen } = this.state;

    return (
      <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={Link} to="/">
          <img
            src={logo}
            alt="Vendor Management"
            width="30"
            height="30"
            className="d-inline-block align-bottom"
          />{' '}
          Vendor Management
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className="ml-auto">
            <NavItem>
              <NavLink tag={Link} to="/vendor/add">
                <i className="fa fa-plus-circle" /> Vendor
              </NavLink>
            </NavItem>
            <NavItem>
              <VendorSearchForm onSearch={this.showSearchResults} />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default withRouter(Masthead);

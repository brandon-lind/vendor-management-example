import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import VendorSearchForm from '../VendorSearch/form';
import './index.css';
import logo from '../../Assets/logo.png';

class Masthead extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/"><img src={logo} alt="Vendor Management" width="30" height="30" className="d-inline-block align-bottom" /> Vendor Management</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar className="ml-auto">
            <NavItem>
              <NavLink href="/vendor/add"><i className="fa fa-plus-circle"></i> Vendor</NavLink>
            </NavItem>
            <NavItem>
              <VendorSearchForm />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Masthead;

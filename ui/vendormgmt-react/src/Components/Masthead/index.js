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
import logo from '../../Assets/logo.png';
import './index.css';

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
        <NavbarBrand href="/"><img src={logo} alt="Vendor Management" width="30" height="30" className="d-inline-block align-top" /> Vendor Management</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/vendor/add">Add Vendor</NavLink>
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

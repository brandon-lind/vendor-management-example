import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Masthead from './Components/Masthead';
import VendorSearchResultsPage from './Pages/VendorSearch';

class App extends Component {
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
    const search = {
      searchTerms: 'test',
      searchResults: [
        {code:'ABC', name:'ABC Vendor', location: '-32.1234,90.123', isActive: true},
        {code:'ADV001', name:'Advance Auto Parts Vendor', location: '-38.456,88.123', isActive: true},
        {code:'JB0123', name:'Jim Bob Vendor', location: '-42.756,72.987', isActive: false},
        {code:'JB0123', name:'Jim Bob Vendor', location: '-42.756,72.987', isActive: false},
        {code:'JB0123', name:'Jim Bob Vendor', location: '-42.756,72.987', isActive: false},
        {code:'JB0123', name:'Jim Bob Vendor', location: '-42.756,72.987', isActive: false},
        {code:'JB0123', name:'Jim Bob Vendor', location: '-42.756,72.987', isActive: false},
        {code:'JB0123', name:'Jim Bob Vendor', location: '-42.756,72.987', isActive: false},
        {code:'XYZ4', name:'XYZ Vendor', location: '-28.159,78.123', isActive: true}
      ]
    };

    return (
      <div className="app">
        <header>
          <Masthead />
        </header>
        <Container fluid>
          <div className="app-content">
            <VendorSearchResultsPage searchTerms={search.searchTerms} searchResults={search.searchResults} />
          </div>
        </Container>
        <footer className="fixed-bottom bg-light border-top p-1">
          <p className="text-center small mb-0">&copy; 2019 Brandon Lind</p>
        </footer>
      </div>
    );
  }
}

export default App;

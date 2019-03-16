import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Masthead from '../Masthead';

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
    return (
      <div className="app">
        <header>
          <Masthead />
        </header>
        <Container fluid>
          <div className="app-content">
            {this.props.children}
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

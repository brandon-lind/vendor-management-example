import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Masthead from './Components/Masthead';

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
      <>
        <Masthead />
        <Container>

        </Container>
      </>
    );
  }
}

export default App;

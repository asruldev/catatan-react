import React, { Component } from 'react';
import Menu from './components/Menu'
import Input from './components/Form'

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Input 
          type="text"
          placeholder="Apa ini" id="8" />

        <Input 
          type="password"
          placeholder="????" id="10" />
      </div>
    );
  }
}

export default App;

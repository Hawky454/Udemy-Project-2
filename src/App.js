import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './components/ValidationComponent';
import CharComponent from './components/CharComponent';

class App extends Component {
  state = { 
    message: ''
   }
  
   handleDelete = (event) => {
     
   }

  handleChange = (event) => {
    const message = event.target.value;
    this.setState({
      message: message
    });
  }
  

  render() { 
    return (  
      <div className="App">
        <input
          onChange={this.handleChange} 
          value={this.state.message}
          type="text"
          className="input" />
          <p>{this.state.message}</p>
          <ValidationComponent 
            length={this.state.message.length}
          />
          <CharComponent 
            delete={this.handleDelete}
            seperate={this.state.message}
            value={this.state.message}
          />
      </div>
    );
  }
}
 
export default App;

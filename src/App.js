import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './components/ValidationComponent';
import CharComponent from './components/CharComponent';

class App extends Component {
  state = { 
    message: ''
   }
  
   handleDelete = (letterIndex) => {
    let messageArr = this.state.message.split(' ');
    messageArr.splice(, 1);
    this.setState({
      message: messageArr
    })
    console.log(messageArr);
  }

  handleChange = (event) => {
    const message = event.target.value;
    this.setState({
      message: message
    })
  }
  

  render() { 
    return (  
      <div className="App">
        <input
          onChange={this.handleChange} 
          type="text"
          className="input" />
          <p>{this.state.message}</p>
          <ValidationComponent 
            length={this.state.message.length}
          />
          <CharComponent 
            delete={() => this.handleDelete(event)}
            seperate={this.state.message}
          />
      </div>
    );
  }
}
 
export default App;

import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './components/ValidationComponent';
import CharComponent from './components/CharComponent';

class App extends Component {
  constructor(props){
    super(props);
      this.state = { 
        message: ''
   }
   this.handleDelete = this.handleDelete.bind(this);
   this.handleChange = this.handleChange.bind(this);
  }
  
   handleDelete = (index) => {
     let userInput = this.state.message.split(' ');
     userInput.splice(index, 1);
     let updatedInput = userInput.join(' ');
     this.setState({
       message: updatedInput
     });
   }

  handleChange = (event) => {
    const message = event.target.value;
    this.setState({
      message: message
    });
  }
  

  render() { 
    //!this allows me to delete by index number in array when passing through the func but it still only either deletes from beginning of the array or the end... this allows it to delete from the end, inwhich I prefer
    let index = this.state.message.split(' ').length -1;
    console.log(index);
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
            delete={() => this.handleDelete(index)}
            seperate={this.state.message} 
            value={this.state.message}
          />
      </div>
    );
  }
}
 
export default App;

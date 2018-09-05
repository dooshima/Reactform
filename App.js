import React, { Component } from 'react';
import ContactForm from './ContactForm';


class App extends Component {
  render() {
   return (
      <div className="App">
        <h1>USER REGISTRATION FORM </h1>
        <p>Welcome fill up this form</p>
      <ContactForm/>
      

      </div>
    );
  }
}

export default App;

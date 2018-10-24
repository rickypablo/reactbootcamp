import React, { Component } from 'react';
import HelloWorld from './components/HelloWorld';
import HelloWorldJSX from './components/HelloWorldJSX';
import './App.css';
import HelloText from './components/HelloText';

class App extends Component {
  clickHandler = () => {
    alert("Button Clicked");
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <HelloWorld name="John Doe"/>        
        <HelloWorldJSX clickHandler={this.clickHandler} />
        <HelloText />
      </div>
    );
  }
}

export default App;

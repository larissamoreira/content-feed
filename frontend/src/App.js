import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.getItems();
  }

  getItems() {
    fetch('http://127.0.0.1:8000/api/item/')
      .then(res => res.json())
      .then(({res}) => console.log(res))
  }

  render() {
    return null;
  }
}


export default App;

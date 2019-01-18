import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      'items': []
    }
  }
  componentDidMount() {
    this.getItems();
  }

  getItems() {
    fetch('http://127.0.0.1:8000/api/item/')
      .then(res => res.json())
      .then(res => this.setState({ 'items': res }));
  }

  render() {
    return (
      <ul>
        {this.state.items.map(function (item, index) {
          return (
            <div key={index}>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          )
        })}
      </ul>
    )
  }
}

export default App;
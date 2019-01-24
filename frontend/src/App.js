import React, { Component } from 'react';
import ContentItem from './ContentItem.js';
import { Container, Row, Col } from 'reactstrap';

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
      <Container>
        <h1>Content Feed</h1>
        {this.state.items.map(function (item, index) {
          return (
            <Row className="ContentItem">
              <Col xs={3} />
              <Col xs={12} sm={6}>
                <ContentItem item={item} />
              </Col>
            </Row>
          )
        })}
      </Container>
    )
  }
}

export default App;
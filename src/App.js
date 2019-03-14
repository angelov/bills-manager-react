import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BillsList from "./BillsList.js";
import Statistics from "./Statistics.js";
import './App.css';

class App extends Component {
  render() {
    return (
        <Container style={{marginTop: 20}}>
          <Header />
          <Body />
        </Container>
    );
  }
}

const Header = () =>
    <Row>
      <Col>
        <h1>Bills Manager</h1>
        <hr />
      </Col>
    </Row>;

const Body = () =>
    <Row style={{marginTop: 20}}>
      <Col>
        <BillsList />
      </Col>
      <Col>
        <Statistics />
      </Col>
    </Row>;

export default App;

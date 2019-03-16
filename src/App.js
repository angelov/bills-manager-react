import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BillsList from "./BillsList.js";
import Statistics from "./Statistics.js";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus} from '@fortawesome/free-solid-svg-icons';

import './App.css';

library.add(faPlus);

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bills: [
                {
                    title: "Electricity",
                    amount: 1500
                }
            ],
        };

        this.onAddBill = this.onAddBill.bind(this);
    }

    onAddBill(title, amount) {
        this.setState({
            bills: [...this.state.bills, {title, amount}]
        });
    }

    render() {
        const { bills } = this.state;

        return (
            <Container style={{marginTop: 20}}>
                <Header />
                <Body bills={bills} onAddBill={this.onAddBill}/>
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

const Body = (props) =>
    <Row style={{marginTop: 20}}>
      <Col>
        <BillsList bills={props.bills} onAddBill={props.onAddBill} />
      </Col>
      <Col>
        <Statistics bills={props.bills} />
      </Col>
    </Row>;

export default App;

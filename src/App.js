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
                    id: 1,
                    title: "Electricity",
                    amount: 1500,
                    paid: false,
                }
            ],
        };

        this.onAddBill = this.onAddBill.bind(this);
        this.onPaidBill = this.onPaidBill.bind(this);
    }

    onAddBill(title, amount) {
        this.setState({
            bills: [...this.state.bills, {title, amount, paid: false, id: this.state.bills.length+1}]
        });
    }

    onPaidBill(id) {
        const updatedBills = this.state.bills.map((bill) => { return {
            ...bill,
            paid: bill.id === id ? true : bill.paid
        }});

        console.log(id);
        this.setState({
            bills: updatedBills
        });
    }

    render() {
        const { bills } = this.state;

        return (
            <Container style={{marginTop: 20}}>
                <Header />
                <Body bills={bills} onAddBill={this.onAddBill} onPaidBill={this.onPaidBill} />
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
        <BillsList bills={props.bills} onAddBill={props.onAddBill} onPaidBill={props.onPaidBill}/>
      </Col>
      <Col>
        <Statistics bills={props.bills} />
      </Col>
    </Row>;

export default App;

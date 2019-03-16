import React, { Component } from 'react';
import StatisticsItem from "./StatisticsItem";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Statistics extends Component {
    render() {
        const { bills } = this.props;

        console.log(bills);

        const thisMonthAmount = bills.map(bill => bill.amount).reduce((sum, amount) => parseFloat(sum) + parseFloat(amount), 0);
        const totalPaidAmount = bills.filter(bill => bill.paid).map(bill => bill.amount).reduce((sum, amount) => parseFloat(sum) + parseFloat(amount), 0);
        const totalOwedAmount = bills.filter(bill => !bill.paid).map(bill => bill.amount).reduce((sum, amount) => parseFloat(sum) + parseFloat(amount), 0);

        return (
            <div>
                <h3>Statistics</h3>
                <Row style={{marginTop: 20}}>
                    <Col>
                        <StatisticsItem title="This month" value={thisMonthAmount} />
                    </Col>
                    <Col>
                        <StatisticsItem title="Total paid" value={totalPaidAmount} />
                    </Col>
                    <Col>
                        <StatisticsItem title="Total owed" value={totalOwedAmount} />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Statistics;
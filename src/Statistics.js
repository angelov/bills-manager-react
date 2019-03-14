import React, { Component } from 'react';
import StatisticsItem from "./StatisticsItem";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Statistics extends Component {
    render() {
        return (
            <div>
                <h3>Statistics</h3>
                <Row style={{marginTop: 20}}>
                    <Col>
                        <StatisticsItem title="This month" value="3,5345" />
                    </Col>
                    <Col>
                        <StatisticsItem title="Total paid" value="123,5345" />
                    </Col>
                    <Col>
                        <StatisticsItem title="Total owed" value="1,223" />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Statistics;
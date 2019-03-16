import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class BillCard extends Component {
    render() {
        const { bill } = this.props;
        const { id, title, amount, paid } = bill;

        return (
            <Card style={{marginTop: 20}}>
                <Card.Body>
                    <Row>
                        <Col>
                            <h5>{title}</h5>
                        </Col>
                        <Col>
                            <h5 className="text-muted text-right">{amount} MKD</h5>
                        </Col>
                    </Row>

                    {!paid &&
                        <Row>
                            <Col>
                                <Button variant="success" size="sm" onClick={() => this.props.onPaidBill(id)} >Mark as Paid</Button>
                            </Col>
                        </Row>
                    }
                </Card.Body>
            </Card>
        );
    }
}

export default BillCard;
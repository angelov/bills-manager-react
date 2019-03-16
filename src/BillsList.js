import React, { Component } from 'react';
import BillCard from "./BillCard";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddBillModal from "./AddBillModal";

class BillsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addingBill: false,
            bills: [
                {
                    title: "Electricity",
                    amount: 1500
                }
            ],
        };

        this.showAddBillModal = this.showAddBillModal.bind(this);
        this.hideAddBillModal = this.hideAddBillModal.bind(this);
        this.addBill = this.addBill.bind(this);
    }

    showAddBillModal() {
        console.log('asd');
        this.setState({ addingBill: true });
    }

    hideAddBillModal() {
        this.setState( { addingBill: false });
    }

    addBill(event) {
        event.preventDefault();

        this.setState({
            bills: [...this.state.bills, {
                title: event.target.title.value,
                amount: event.target.amount.value
            }]
        });

        this.hideAddBillModal();
    }

    render() {
        const { addingBill, bills } = this.state;

        return (
            <div>
                <h3>March 2019</h3>

                {bills.map((bill) =>
                    <BillCard title={bill.title} amount={bill.amount} />
                )}

                <AddBillModal visible={addingBill} onClose={this.hideAddBillModal} onSubmit={this.addBill} />

                <Button variant="info" style={{ marginTop: 25}} onClick={this.showAddBillModal}>
                    <FontAwesomeIcon icon="plus" /> Add bill
                </Button>
            </div>
        );
    }

}

export default BillsList;

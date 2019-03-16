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
        };

        this.showAddBillModal = this.showAddBillModal.bind(this);
        this.hideAddBillModal = this.hideAddBillModal.bind(this);
        this.addBill = this.addBill.bind(this);
    }

    showAddBillModal() {
        this.setState({ addingBill: true });
    }

    hideAddBillModal() {
        this.setState( { addingBill: false });
    }

    addBill(event) {
        event.preventDefault();

        const { onAddBill } = this.props;

        onAddBill(event.target.title.value, event.target.amount.value);

        this.hideAddBillModal();
    }

    render() {
        const { addingBill } = this.state;
        const { bills } = this.props;

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

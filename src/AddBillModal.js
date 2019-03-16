import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class AddBillModal extends Component {
    render() {
        const { visible, onClose, onSubmit } = this.props;

        return (
            <Modal show={visible} onHide={onClose}>
                <form onSubmit={onSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add bill</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form.Group controlId="title">
                            <Form.Label>Title:</Form.Label>
                            <Form.Control type="title" placeholder="Bill title" />
                            <Form.Text className="text-muted">
                                eg. Electricity
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="amount">
                            <Form.Label>Amount:</Form.Label>
                            <Form.Control type="number" placeholder="Bill amount" />
                        </Form.Group>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={onClose}>Close</Button>
                        <Button variant="primary" type="submit">Add</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        );
    }
}

export default AddBillModal;
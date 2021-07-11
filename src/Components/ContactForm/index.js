import React from "react";
import { Form, Button } from "react-bootstrap";
import "./contactForm-styles.scss";

const ContactForm = () => {
    return (
        <div className="container__contact-form form-container">
            <h2 className="section--header__contact mB15">Contact</h2>
            <Form>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group controlId="emailId">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>

                <Form.Group controlId="message" className="mB20">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={2} />
                </Form.Group>
                <Button variant="default" type="submit" className="submit-btn">
                    Send
                </Button>
            </Form>
        </div>
    );
};

export default ContactForm;

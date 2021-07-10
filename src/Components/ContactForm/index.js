import React from "react";
import { Form, Button } from "react-bootstrap";
import "./contactForm-styles.scss";

const ContactForm = () => {
    return (
        <div className="container__contact-form form-container">
            <h2 className="section--header__contact">Contact</h2>
            <Form>
                <Form.Group controlId="emailId">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>

                <Form.Group controlId="message">
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

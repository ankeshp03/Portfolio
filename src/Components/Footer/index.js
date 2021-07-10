import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FontAwesome from "react-fontawesome";
import ContactForm from "./../ContactForm";
import "./footer-styles.scss";

const Footer = () => {
    return (
        <Container id="contact" fluid className="wrapper section--wrapper__footer">
            <Row>
                <Col sm={6}>
                    <ContactForm />
                </Col>
                <Col sm={6} className="footer--col__info">
                    <div className="container-right">
                        <a
                            href="mailto:ank.paramanik@gmail.com"
                            className="email"
                        >
                            ank.paramanik@gmail.com
                        </a>
                        <div className="social-icons--container">
                            <a
                                href="twitter"
                                aria-label="Twitter"
                                className="social-icon"
                            >
                                <FontAwesome name="twitter" />
                            </a>
                            <a
                                href="linkedin"
                                aria-label="Linkedin"
                                className="social-icon"
                            >
                                <FontAwesome name="linkedin" />
                            </a>
                            <a
                                href="github"
                                aria-label="GitHub"
                                className="social-icon"
                            >
                                <FontAwesome name="github" />
                            </a>
                            <a
                                href="codepen"
                                aria-label="Codepen"
                                className="social-icon"
                            >
                                <FontAwesome name="codepen" />
                            </a>
                        </div>
                        <sup className="developer-info">
                            Designed & Developed by Ankesh Paramanik | 2021
                        </sup>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;

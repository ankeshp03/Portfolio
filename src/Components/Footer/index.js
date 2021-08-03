import React from "react";
import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import FontAwesome from "react-fontawesome";
import ContactForm from "./../ContactForm";
import socialIcons from "./socialIcons.json";
import Grid from "./../../assets/reference_grid.svg";

const Footer = () => {
    const applyTooltip = (element, text) => (
        <OverlayTrigger
            key={text}
            placement="top"
            overlay={<Tooltip className="social-icon--tooltip">{text}</Tooltip>}
        >
            {element}
        </OverlayTrigger>
    );

    return (
        <Container
            id="contact"
            fluid
            className="wrapper component--wrapper__footer"
        >
            <img src={Grid} className="reference-grid" alt="reference" />
            <Row>
                <Col md={6}>
                    <ContactForm />
                </Col>
                <Col md={6} className="footer--col__info">
                    <div className="container-right">
                        <Row>
                            <Col sm={12}>
                                <a
                                    href="mailto:ank.paramanik@gmail.com"
                                    className="email"
                                >
                                    ank.paramanik@gmail.com
                                </a>
                                <div className="social-icons--container">
                                    {socialIcons.map((icon) =>
                                        applyTooltip(
                                            <a
                                                href={icon.path}
                                                aria-label={icon.label}
                                                className="social-icon"
                                            >
                                                <FontAwesome
                                                    name={icon.iconName}
                                                />
                                            </a>,
                                            icon.tooltipText
                                        )
                                    )}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} className="developer-info--container">
                                <sup className="developer-info">
                                    Designed & Developed by Ankesh Paramanik
                                    &#169; 2021
                                </sup>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;

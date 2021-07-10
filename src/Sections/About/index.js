import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Skills from "./skills.json";
import './about-styles.scss';
import Photo from './../../assets/portfolio_image.png';

const About = () => {
    return (
        <Container id="about" fluid className="wrapper section--wrapper section--wrapper__about">
            <h2 className="section--header">About</h2>
            <Row>
                <Col sm="8">
                    <Row>
                        <Col sm={12}>
                            <p>
                                My name is Ankesh I enjoy developing web
                                applications and learning new web technologies.
                                I developed interest in web development back in
                                2015 when I attended a workshop in my college.
                            </p>
                            <p>
                                At present, I am working as a frontend developer
                                in an MNC where I focus on building
                                user-friendly yet informative dashboards for a
                                variety of clients.
                            </p>
                        </Col>
                    </Row>
                    <Row className="skills--row">
                        <Col sm={12}>
                            <p>
                                <strong>
                                    Here are a few technologies I've been
                                    working with:
                                </strong>
                            </p>
                            <ul className="skills--list p0">
                                {Skills.map((skill) => (
                                    <li key={skill} className="list__item">{skill}</li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                </Col>
                <Col sm="4" className="about--col__image">
                    <img src={Photo} alt="Ankesh Paramanik" className="about-content--image" />
                </Col>
            </Row>
        </Container>
    );
};

export default About;

import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './home-styles.scss';

const Home = () => {
    return (
        <Container fluid className="homeWrapper">
            <div className="imageContainer" />
            <Row>
                <Col sm={12}>
                    <p>Hi, I am <span className="name">Ankesh Paramanik</span></p>
                    <p>A Front-end Developer</p>
                    <p>at Cognizant</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;

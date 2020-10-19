import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
    return (
        <Container fluid id="home" className="mainWrapper homeWrapper">
            <div className="imageContainer" />
            <Row>
                <Col sm={12} className="infoContainer">
                    <p className="mB5">Hi, I am <strong>Ankesh Paramanik</strong></p>
                    <p className="mB5">A Front-end Developer</p>
                    <p className="mB5">at Cognizant</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;

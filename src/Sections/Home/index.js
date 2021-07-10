import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AppSplitView from "./../../Components/AppSplitView";
import "./home-styles.scss";

const Home = () => {
    return (
        <Container id="home" fluid className="wrapper section--wrapper section--wrapper__home">
            <Row>
                <Col sm={12}>
                    <p>
                        <span>Hi, I am </span>
                        <span className="content__text--big">
                            Ankesh Paramanik
                        </span>
                    </p>
                    <p>
                        <span>a </span>
                        <span className="content__text--medium">
                            Front-end Developer
                        </span>
                    </p>
                    <p>
                        <span>at </span>
                        <span className="content__text--medium">Cognizant</span>
                    </p>
                    <Button variant="default" className="cta-button">Get In Touch</Button>
                </Col>
                <Col>
                    <div className="content__interactive-display-view">
                        <AppSplitView />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import AppSplitView from "./../../Components/AppSplitView";
// import "./home-styles.scss";

const Home = () => {
    return (
        <Container id="home" fluid className="wrapper section--wrapper section--wrapper__home">
            <Row>
                <Col lg={8}>
                    <p className="r-mB--0_5">
                        <span>Hi, I am </span>
                        <span className="content__text--big">
                            Ankesh Paramanik
                        </span>
                    </p>
                    <p className="r-mB--0_5">
                        <span>a </span>
                        <span className="content__text--medium">
                            Front-end Developer
                        </span>
                    </p>
                    <p className="r-mB--2">
                        <span>from </span>
                        <span className="content__text--medium">India</span>
                    </p>
                    <Button variant="default" className="cta-button">Get In Touch</Button>
                </Col>
                {/* <Col lg={4}>
                    <div className="content__interactive-display-view">
                        <AppSplitView />
                    </div>
                </Col> */}
            </Row>
        </Container>
    );
};

export default Home;

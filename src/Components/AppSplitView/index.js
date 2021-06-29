import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CodeView from "../CodeView";
import DashboardView from "../DashboardView";

const AppSplitView = () => {
    return (
        <Container fluid>
            <Row>
                <Col sm="4">
                    <CodeView />
                </Col>
                <Col sm="8">
                    <DashboardView />
                </Col>
            </Row>
        </Container>
    );
};

export default AppSplitView;

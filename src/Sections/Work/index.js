import React from "react";
import { Container, Card, Button } from "react-bootstrap";

const Work = () => {
    return (
        <Container
            id="work"
            fluid
            className="wrapper section--wrapper section--wrapper__content section--wrapper__work"
        >
            <h2 className="section--header">Work</h2>
            <div className="work--card__container">
                <Card className="work--card">
                    <Card.Body>
                        <Card.Img variant="top" src="" />
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card className="work--card">
                    <Card.Body>
                        <Card.Img variant="top" src="" />
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card className="work--card">
                    <Card.Body>
                        <Card.Img variant="top" src="" />
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card className="work--card">
                    <Card.Body>
                        <Card.Img variant="top" src="" />
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    );
};

export default Work;

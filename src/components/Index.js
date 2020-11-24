// Index component file (landing page)

import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import hawaii from "../img/HawaiiPic.jpg";
import '../styles/Index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//     Accordion,
//     AccordionItem,
//     AccordionItemHeading,
//     AccordionItemButton,
//     AccordionItemPanel,
// } from 'react-accessible-accordion';
import { Accordion, Card, Button } from 'react-bootstrap';
// import Card from "react-bootstrap/Card";
// import Card from '@material-ui/core/Card';

function Index() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>About Me</h1>
                    <Col>
                        <img className="responsive" src={hawaii} alt="Picture of me from Hawaii." width="500" height="433" />
                    </Col>
                    <br></br>
                    <Col>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        General
                                    </Accordion.Toggle>
                                </Card.Header>

                                <Accordion.Collapse eventKey="0">
                                    <Card.Body> My name is Chris Kabana. I live in Chicago. I have a PhD in Organic Chemistry with nearly a
                                    decade of experience working in an industrial manufacturing setting developing innovative new
                                    after-market automotive products. I am also a Full Stack Web Development student at Northwestern 
                                    University Coding Bootcamp. </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        Hobbies
                                    </Accordion.Toggle>
                                </Card.Header>

                                <Accordion.Collapse eventKey="1">
                                    <Card.Body> I enjoy cooking for me and my wife. It's fun to try new recipes! I love traveling: my wife
                                    and I have been to Ireland, Australia, and Hawaii (as well as other less exciting domestic locations).
                                    I love playing racquetball. I have played many times in the state tournaments in PA and IL. I like to work
                                    out, both strength training as well as things like Pilates. I'm also an avid gamer (PC, PS, Nintendo).
                                    My favorite game for each is probably WoW, Horizon: Zero Dawn, and Breath of the Wild, respectively. </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                        Books/Movies
                                    </Accordion.Toggle>
                                </Card.Header>

                                <Accordion.Collapse eventKey="2">
                                    <Card.Body> I love reading. Some of my favorites are in the fantasy genre, such as Lord of the Rings,
                                    Harry Potter, The Wheel of Time, Game of Thrones, anything by Brandon Sanderson, The Harry Dresden Files. I also
                                    love just about anything by Stephen King. As far as movies go, I love The Matrix (yes, even the sequels), The
                                    Martian (the book too!), Lord of the Rings, the MCU, Star Wars. The magic of the internet has blurred the line
                                    between movies and TV so I'll list my favorite shows as well. Game of Thrones, Westworld, The Simpsons, Rick and
                                    Morty, Breaking Bad. </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Col>
            </Row>
            {/* making room so the footer doesn't block anything */}
            <br></br>
            <br></br>
            <br></br>
        </Container>
    )
}

export default Index;
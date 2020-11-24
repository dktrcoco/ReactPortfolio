import React, { useState, useEffect } from "react";
import "../styles/Portfolio.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route } from "react-router-dom";
import { Row, Col, Container, Card } from 'react-bootstrap';

function Contact() {
    return (

        <Container>

            <Row>
                <div className="col-md-12">
                    <h1>How to Contact Me</h1>
                </div>
            </Row>

            <Row>
                <div className="col-md-12">
                    <p>If you have any questions for me or if you want to discuss in greater detail anything you have
                    seen here, please submit your name and email along with a brief message. I'm looking forward to
                    hearing from you!</p>
                </div>
            </Row>

            <Row className="form-group">
                <label for="usr">Full Name:</label>
                <input type="text" className="form-control" id="usr" placeholder="Enter Full Name" name="email" />
            </Row>

            <Row className="form-group">
                <label for="email">Email:</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
            </Row>

            <Row className="form-group">
                <label for="comment">Comment:</label>
                <textarea className="form-control" rows="5" id="comment"></textarea>
            </Row>

            <button type="submit" className="button btn btn-default">Submit</button>
        </Container>
    );
}

export default Contact;
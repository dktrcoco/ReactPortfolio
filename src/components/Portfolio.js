// portfolio component file

import React, { useState, useEffect } from "react";
import "../styles/Portfolio.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import gladiators from "../img/gladiators.jpg";
import burger from "../img/burger2.png";
import employee from "../img/employee.png";
import meds from "../img/Meds.jpg";
import note from "../img/note.png";
import forecast from "../img/Forecast.jpg";
import { Row, Col, Container, Card } from 'react-bootstrap';
import CheckoutButton from './CheckoutButton';

function Portfolio() {
    return (
        <Container>

            <Row>

                <Col>
                    <h1 className="port">Portfolio</h1>
                </Col>
            </Row>
                <br></br>
            <Row>
                <Col>
                    {/* don't need to reactify headers */}
                    <h2>Programming Languages & Tools</h2>
                    {/* don't need to reactify ul */}
                    <ul className="list-inline dev-icons">
                        {/* <!-- https://devicon.dev/ --> */}
                        {/* <!-- HTML5 Logo --> */}
                        <i className="devicon-html5-plain html5"><span className="html5Text">HTML5</span></i>
                        {/* <!-- CSS3 Logo --> */}
                        <i className="devicon-css3-plain css3"><span className="css3Text">CSS3</span></i>
                        {/* <!-- Javascript Logo --> */}
                        <i className="devicon-javascript-plain js"><span className="jsText">Javascript</span></i>
                        {/* <!-- Node JS Logo --> */}
                        <i className="devicon-nodejs-plain node"><span className="nodeText">Node.js</span></i>
                        {/* <!-- npm Logo --> */}
                        <i className="devicon-npm-original-wordmark npm"><span className="npmText">NPM</span></i>
                        {/* <!-- MySQL Logo --> */}
                        <i className="devicon-mysql-plain mySql"><span className="mySqlText">MySQL</span></i>
                        {/* <!-- Sequelize Logo --> */}
                        <i className="devicon-sequelize-plain sequelize"><span className="sequelizeText">Sequelize</span></i>
                        {/* <!-- MongoDB logo --> */}
                        <i className="devicon-mongodb-plain-wordmark mongoDB"><span className="mongoDBText">MongoDB</span></i>
                        {/* <!-- Express --> */}
                        <i className="devicon-express-original express"><span className="expressText">Express</span></i>
                        {/* <!-- Handlebars Logo --> */}
                        <i className="devicon-handlebars-plain handlebars"><span className="handlebarsText">Handlebars</span></i>
                        {/* <!-- Bootstrap Logo --> */}
                        <i className="devicon-bootstrap-plain bootstrap"><span className="bootstrapText">Bootstrap</span></i>
                        {/* React Logo */}
                        <i className="devicon-react-plain react"><span className="reactText">React</span></i>
                    </ul>
                </Col>
            </Row>
                <br></br>
            <Row>
                <Col>
                    <h1 className="port">Select Projects</h1>
                </Col>
            </Row>

            {/* <!-- Project 2: Gaming Gladiator --> */}
            <Card>
                <Row>
                    {/* need to reactify */}
                    <Col>
                        <div className="portfolio">
                            <img className="image" src={gladiators} alt="Gaming Gladiator" />
                            <h6 className="imageText">Gaming Gladiator</h6>
                        </div>
                        <h6>Users submit their Blizzard Gamertags for Overwatch and the app tracks and displays in a graph total gold
                    medals earned.</h6>
                        {/* no need for reactify here */}
                        <div>
                            <CheckoutButton href="https://github.com/dktrcoco/GamingGladiator" message="Repo!"></CheckoutButton>
                            <CheckoutButton href="https://gaminggladiator.herokuapp.com/welcome.html" message="Heroku App!"></CheckoutButton>
                        </div>

                    </Col>
                </Row>
            </Card>
            <br></br>

            {/* <!-- Project 1: Medicine Tracker --> */}
            <Card>
                <Row>
                    <div id="medCol" className="col-md-12 col-xs-12 column">
                        <div className="portfolio">
                            <img className="image" src={meds} alt="Med Tracker" />
                            <h6 className="imageText">Med Tracker</h6>
                        </div>
                        <h6>User submits medication, app returns FDA usage, warnings, and side effects.</h6>
                        <div>
                            <CheckoutButton href="https://github.com/dktrcoco/MedTracker" message="Repo!"></CheckoutButton>
                            <CheckoutButton href="https://dktrcoco.github.io/newMedicinePlanner/" message="Heroku App!"></CheckoutButton>
                        </div>
                    </div>
                </Row>
            </Card>
            <br></br>

            {/* <!-- Example Assignment: Node Express Handlebars --> */}
            <Card>
                <Row>
                    <div id="burgerCol" className="col-md-12">
                        <div className="portfolio">
                            <img className="image" src={burger} alt="Burger Tracker" />
                            <h6 className="imageText">Burger Tracker</h6>
                        </div>
                        <h6>App tracks user-inputted burgers and lists whether they have been eaten or not. Uses MySQL, Express</h6>
                        <div>
                            <CheckoutButton href="https://github.com/dktrcoco/Node_Express_Handlebars" message="Repo!"></CheckoutButton>
                            <CheckoutButton href="https://devourtheburgers.herokuapp.com/" message="Heroku App!"></CheckoutButton>
                        </div>
                    </div>
                </Row>
            </Card>
            <br></br>

            {/* <!-- Example Assignment: Employee Management System --> */}
            <Card>
                <Row>
                    <div id="employeeCol" className="col-md-12">
                        <div className="portfolio">
                            <img className="image" src={employee} alt="Employee Management System" />
                            <h6 className="imageText">Employee Management System</h6>
                        </div>
                        <h6>App that is a CMS (Content Management System) solution for managing a company's employees using node,
                    inquirer, and MySQL</h6>
                        <div>
                            <CheckoutButton href="https://github.com/dktrcoco/Employee_Tracker" message="Repo!"></CheckoutButton>
                            <CheckoutButton href="https://youtu.be/dAWDrAyr6DU" message="video!"></CheckoutButton>
                        </div>
                    </div>
                </Row>
            </Card>
            <br></br>

            {/* <!-- Example Assignment: Note Taker --> */}
            <Card>
                <Row>
                    <div id="noteCol" className="col-md-12">
                        <div className="portfolio">
                            <img className="image" src={note} alt="Note Taker" />
                            <h6 className="imageText">Note Taker</h6>
                        </div>
                        <h6>App that can be used to write, save, and delete notes.
                        This app uses an express backend and save and retrieve note
                    data from a JSON file.</h6>
                        <div>
                            <CheckoutButton href="https://github.com/dktrcoco/NoteTaker" message="Repo!"></CheckoutButton>
                            <CheckoutButton href="https://notetaker5.herokuapp.com/" message="Heroku App!"></CheckoutButton>
                        </div>
                    </div>
                </Row>
            </Card>
            <br></br>

            {/* <!-- Example Assignment: Weather Dashboard --> */}
            <Card>
                <Row>
                    <div id="weatherCol" className="col-md-12 col-xs-12 column">
                        <div className="portfolio">
                            <img className="image" src={forecast} alt="Weather Forecast" />
                            <h6 className="imageText">Weather Dashboard</h6>
                        </div>
                        <h6>User submits city, returns current and 5-day forecast.</h6>
                        <div>
                            <CheckoutButton href="https://github.com/dktrcoco/Weather-Dashboard" message="Repo!"></CheckoutButton>
                            <CheckoutButton href="https://dktrcoco.github.io/Weather-Dashboard/" message="App!"></CheckoutButton>
                        </div>
                    </div>
                </Row>
            </Card>
            {/* I know I shouldn't use breaks like this but I haven't been able to figure out a better way to 
            allow enough space for the last project to be fully displayed. */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </Container >
    );
}

export default Portfolio;
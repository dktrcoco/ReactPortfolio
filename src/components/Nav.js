import React from "react";
// import SearchBox from "./SearchBox.js";
import "../styles/Nav.css";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import resume from "../components/ChrisKabanaResume.pdf";

function Nav() {
    return (
        <div className="header">
            {/* <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faGithub} />
                <FontAwesomeIcon icon={faFileAlt} /> */}
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <a className="navbar-brand" href="/index">Christopher George Kabana PhD</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li>
                                <Link to="/index" className="nav-link">About
                                </Link>
                        </li>
                        <li>
                                <Link to="/contact" className="nav-link">Contact
                                </Link>
                        </li>
                        <li>
                                <Link to="/portfolio" className="nav-link">Portfolio
                                </Link>
                        </li>
                        <li> <a className="social-icon linked" href="https://www.linkedin.com/in/christopherkabana" target="_blank"><i
                            className="fab fa-linkedin-in"><FontAwesomeIcon icon={faLinkedin} /></i><span className="linkedText">LinkedIn Profile</span></a></li>
                        <li><a className="social-icon git" href="https://github.com/dktrcoco" target="_blank"><i
                            className="fab fa-github"><FontAwesomeIcon icon={faGithub} /></i><span className="gitText">GitHub Profile</span></a></li>
                        <li><a className="resume" href={resume} target="_blank"><i className="fas fa-file"><FontAwesomeIcon icon={faFileAlt} /></i><span
                            className="resumeText">Resume</span></a></li>
                        <li className="nav-link">email: chris.kabana@gmail.com</li>
                        <li className="nav-link">cell: 412.335.5008</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
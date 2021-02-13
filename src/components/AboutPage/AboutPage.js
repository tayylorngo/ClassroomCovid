import React, {Component} from 'react';
import Header from "../Header/Header";
import {Container, Row, Col, Card} from 'react-bootstrap';
import { FaGithub, FaHospitalSymbol } from "react-icons/fa";

import './AboutPage.css';

class AboutPage extends Component {
    render() {
        return(
            <div className="main">
                <Header/>
                <Container >
                    <Row>
                        <h1 className="header">About Us</h1>
                    </Row>
                    <Row>
                        <Col>
                            <br/>
                            <p className="aboutUsText">
                                During the coronavirus (COVID-19) pandemic, many countries instituted lockdowns (general population restrictions,
                                including orders to stay at home and work from home) to slow the rapid spread of the virus. Such measures have disrupted
                                the normal functioning of schools and universities and necessitated the delivery of alternative methods for students and
                                teachers to continue with their lessons. Our website is a platform where schools around the country can fill out a form
                                detailing information on how they are still carrying on to provide education as the pandemic runs its course.
                            </p>
                            <p className="aboutUsText">
                                Researchers are allowed to take advantage of these novel teaching systems to learn more about various education techniques that
                                may impact how future generations will be learning even after the virus has cleared up. Families with children looking to move
                                on to higher education or just transferring schools can utilize our database to have a collective list in one place rather than
                                finding this information individually, which can be a hassle. They can also compare and contrast issues that matter to them and
                                have a better understanding on specific school information.
                            </p>
                        </Col>
                        <Col><h4>Developer Information</h4>
                            <table className="table table-hover" >
                                <thead>
                                <tr>
                                    <th scope="col">Members</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Links</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>

                                    <td>Taylor Ngo</td>
                                    <td>Back-end & Project Management</td>
                                    <td><a href="https://www.taylorngo.com/">https://www.taylorngo.com/</a></td>
                                </tr>
                                <tr>

                                    <td>Jacky Chan</td>
                                    <td>Front-end Development</td>
                                    <td><a href="https://jackychan.netlify.app/">https://jackychan.netlify.app/</a></td>
                                </tr>
                                <tr>

                                    <td>Daoqin Gao</td>
                                    <td>Front-end Development</td>
                                    <td>N/A</td>
                                </tr>
                                <tr>
                                    <td>Jeffrey Liew</td>
                                    <td>Front-end/ Research</td>
                                    <td>N/A</td>
                                </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                </Container>

                <br/>

                <br/>
                <Container>
                    <Row>
                        <Col>
                            <p>This project was made for HackHealth 2021,
                                a health-themed hackathon that welcomes all students and is devoted to being inclusive and beginner-friendly.</p>
                        </Col>
                    </Row>
                </Container>

                <br/>
                <Container>
                    <Row>
                        <Col>
                            <Card className="quoteCard">
                                <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                        <p className="quoteColor">
                                            {' '}
                                            "HackHealth was an amazing opportunity for me to learn new things.
                                            I had an amazing time and I enjoyed the variety of events hosted, especially the tetris tournament."{' '}
                                        </p>
                                        <footer className="blockquote-footer">
                                            <cite className="quoteSource" title="Source Title">Jacky Chan</cite>
                                        </footer>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <br/>
                <br/>
                <Container className="a">
                    <Col>
                        <div className="list-group">
                            {/*<a href="#" className="list-group-item list-group-item-action text-center disabled">More info</a>*/}
                            <a href="https://github.com/tayylorngo/ClassroomCovid" className="list-group-item list-group-item-action text-center someLinks">Source Code <FaGithub/></a>
                            <a href="https://www3.cs.stonybrook.edu/~wics/hackhealth/" className="list-group-item list-group-item-action text-center">HackHealth 2021 <FaHospitalSymbol/></a>
                        </div>

                    </Col>
                </Container>
            </div>
        );
    }
}

export default AboutPage;
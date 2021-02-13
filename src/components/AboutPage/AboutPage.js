import React, {Component} from 'react';
import Header from "../Header/Header";
import {Container, Row, Col} from 'react-bootstrap';

import './AboutPage.css';

class AboutPage extends Component {
    render() {
        return(
            <div className="main">
                <Header/>
                <Container >
                    <Row>
                        <header className="header">
                            <centerName >
                                About us
                            </centerName>

                        </header>

                    </Row>
                    <Row>
                        <Col>
                            <p>
                                During the coronavirus disease (COVID-19) pandemic, many countries instituted lockdowns (general population restrictions, including orders to stay at home and work from home) to slow the rapid spread of the virus. Such measures have disrupted the normal functioning of schools and universities and necessitated the delivery of alternative methods for students and teachers to continue with their lessons. Our website is a platform where schools around the country can fill out a form detailing information on how they are still carrying on to provide education as the pandemic runs its course.

                                Researchers are allowed to take advantage of these novel teaching systems to learn more about various education techniques that may impact how future generations will be learning even after the virus has cleared up. Families with children looking to move on to higher education or just transferring schools can utilize our database to have a collective list in one place rather than finding this information individually, which can be a hassle. They can also compare and contrast issues that matter to them and have a better understanding on specific school information
                            </p>
                        </Col>
                        <Col><a>Members Info</a>
                            <table className="table table-hover" >
                                <thead>
                                <tr>
                                    <th scope="col">Members</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Contacts</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>

                                    <td>Taylor</td>
                                    <td>Back-end & project Management</td>
                                    <td>something@stonybrook.edu</td>
                                </tr>
                                <tr>

                                    <td>Jackie</td>
                                    <td>Front-end designing</td>
                                    <td>something@murrow.edu</td>
                                </tr>
                                <tr>

                                    <td>Daoqin</td>
                                    <td>This about page</td>
                                    <td>somethihng@sbu</td>
                                </tr>
                                <tr>
                                    <td>Jeffry</td>
                                    <td>Page writeup/researcher/images/data/data</td>
                                    <td>@something</td>
                                </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>


                </Container>

                <Container className="a">
                    <Col>
                        <div className="list-group">
                            <a href="#" className="list-group-item list-group-item-action text-center disabled">More info</a>
                            <a href="https://github.com/JackyChan-cs/Sbu-Hackathon" className="list-group-item list-group-item-action text-center">Source Code</a>
                            <a href="#" className="list-group-item list-group-item-action text-center disabled">HackHealth 2021</a>
                        </div>

                    </Col>
                </Container>
            </div>
        );
    }
}

export default AboutPage;
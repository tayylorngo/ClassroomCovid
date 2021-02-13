import React, {Component} from 'react';
import {Container, Row, Col, Card, Table} from 'react-bootstrap';
import './School.css';
import {RiSurgicalMaskFill} from 'react-icons/ri';
import { BsFillPeopleFill } from "react-icons/bs";
import { GrDocumentTest } from "react-icons/gr";
import { GiHypodermicTest } from "react-icons/gi";
import { FaPlane } from "react-icons/fa";


class School extends Component{

    render() {
        return(
            <div>
                <Container className="schoolContainer">
                    <Row>
                        <Col>
                            <Card className="text-center schoolCard">
                                <Card.Body>
                                    <Card.Title id="collegeName">{this.props.name}</Card.Title>
                                        <Table bordered hover className="infoTable">
                                            <tbody>
                                            <tr>
                                                <td className="policy">Face Mask Policy <br/> <RiSurgicalMaskFill/></td>
                                                <td className="policyText" align="left">{this.props.maskPolicy}</td>
                                            </tr>
                                            <tr>
                                                <td>Social Distancing Guidelines  <BsFillPeopleFill/></td>
                                                <td className="policyText" align="left">{this.props.socialDistancingPolicy}</td>
                                            </tr>
                                            <tr>
                                                <td>Covid-19 Testing Information <GrDocumentTest/></td>
                                                <td className="policyText" align="left">{this.props.covidTestingInfo}</td>
                                            </tr>
                                            <tr>
                                                <td>Covid-19 Vaccine Information <GiHypodermicTest/></td>
                                                <td className="policyText" align="left">{this.props.vaccineInfo}</td>
                                            </tr>
                                            <tr>
                                                <td>Travel & Quarantine Information <FaPlane/></td>
                                                <td className="policyText" align="left">{this.props.travelInfo}</td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default School;
import React, {Component} from 'react';
import {Container, Row, Col, Card, Table} from 'react-bootstrap';
import './School.css';

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
                                                <td className="policy">Face Mask Policy</td>
                                                <td className="policyText" align="left">{this.props.maskPolicy}</td>
                                            </tr>
                                            <tr>
                                                <td>Social Distancing Guidelines</td>
                                                <td className="policyText" align="left">{this.props.socialDistancingPolicy}</td>
                                            </tr>
                                            <tr>
                                                <td>Covid-19 Testing Information</td>
                                                <td className="policyText" align="left">{this.props.covidTestingInfo}</td>
                                            </tr>
                                            <tr>
                                                <td>Covid-19 Vaccine Information</td>
                                                <td className="policyText" align="left">{this.props.vaccineInfo}</td>
                                            </tr>
                                            <tr>
                                                <td>Travel & Quarantine Information</td>
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
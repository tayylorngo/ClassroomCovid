import React, {Component} from 'react';
import {Container, Button, Form} from 'react-bootstrap';
import './AddSchool.css';
import Header from "../Header/Header";

class AddSchool extends Component{

    state = {

    }

    render() {
        return(
            <div>
                <Header/>
                <h1 className="addSchoolTitle">Add School</h1>
                <Container>
                    <Form className="addSchoolForm">
                        <Form.Group>
                            <h5>School Name:</h5>
                            <Form.Control size="md" type="text" placeholder="school name" />
                            <br />
                            <h5>Mask Policy: </h5>
                            <Form.Control as="textarea" rows={3} />
                            <br />
                            <h5>Social Distancing Guidelines: </h5>
                            <Form.Control as="textarea" rows={3} />
                            <br/>
                            <h5>Covid-19 Vaccine Information: </h5>
                            <Form.Control as="textarea" rows={3} />
                            <br/>
                            <h5>Travel & Quarantine Information: </h5>
                            <Form.Control as="textarea" rows={3} />
                            <br/>
                        </Form.Group>
                        <Button variant="primary">Add School</Button>{' '}
                    </Form>
                </Container>
            </div>
        );
    }
}

export default AddSchool;

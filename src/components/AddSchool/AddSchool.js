import React, {Component} from 'react';
import {Container, Form, Alert, Button} from 'react-bootstrap';
import './AddSchool.css';
import Header from "../Header/Header";
import fire from '../../firebase';

class AddSchool extends Component{

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeMaskPolicy = this.onChangeMaskPolicy.bind(this);
        this.onChangeSocialDistancing = this.onChangeSocialDistancing.bind(this);
        this.onChangeVaccineInfo = this.onChangeVaccineInfo.bind(this);
        this.onChangeTravelInfo = this.onChangeTravelInfo.bind(this);
        this.onChangeTestingInfo = this.onChangeTestingInfo.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            maskPolicy: '',
            socialDistancing: '',
            vaccineInfo: '',
            travelInfo: '',
            testingInfo: '',
            alertVisible: false
        }
    }

    onChangeName(e){
        this.setState({name: e.target.value});
    }

    onChangeMaskPolicy(e){
        this.setState({maskPolicy: e.target.value});
    }

    onChangeSocialDistancing(e){
        this.setState({socialDistancing: e.target.value});
    }

    onChangeVaccineInfo(e){
        this.setState({vaccineInfo: e.target.value});
    }

    onChangeTravelInfo(e){
        this.setState({travelInfo: e.target.value});
    }

    onChangeTestingInfo(e){
        this.setState({testingInfo: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();

        fire.firestore().collection("schools").add({
            name: this.state.name,
            maskPolicy: this.state.maskPolicy,
            socialDistancingPolicy: this.state.socialDistancing,
            vaccineInfo: this.state.vaccineInfo,
            travelInfo: this.state.travelInfo,
            covidTestingInfo: this.state.testingInfo,
        });

        this.setState({alertVisible: true});
    }

    render() {
        return(
            <div>
                <Header/>
                <br/>
                <br/>
                <br/>
                <br/>
                        <Alert
                            show={this.state.alertVisible}
                            id="submittedAlert"
                            variant="success"
                            onClick={() => {this.setState({alertVisible: false})}}>
                            Successfully added {this.state.name} to the database!
                            <br/>
                            {' '}<Button id="alertClose" size="sm" onClick={() => {this.setState({alertVisible: false})}} variant="outline-danger">
                                X
                            </Button>
                        </Alert>
                <h1 className="addSchoolTitle">Add School</h1>
                <Container>
                    <Form className="addSchoolForm" onSubmit={this.onSubmit}>
                        <Form.Group>
                            <h5>School Name:</h5>
                            <Form.Control onChange={this.onChangeName} size="md" type="text" placeholder="school name" />
                            <br />
                            <h5>Mask Policy: </h5>
                            <Form.Control onChange={this.onChangeMaskPolicy} as="textarea" rows={3} />
                            <br />
                            <h5>Social Distancing Guidelines: </h5>
                            <Form.Control onChange={this.onChangeSocialDistancing} as="textarea" rows={3} />
                            <br/>
                            <h5>Covid-19 Testing Information: </h5>
                            <Form.Control onChange={this.onChangeTestingInfo} as="textarea" rows={3} />
                            <br/>
                            <h5>Covid-19 Vaccine Information: </h5>
                            <Form.Control onChange={this.onChangeVaccineInfo} as="textarea" rows={3} />
                            <br/>
                            <h5>Travel & Quarantine Information: </h5>
                            <Form.Control onChange={this.onChangeTravelInfo} as="textarea" rows={3} />
                            <br/>
                        </Form.Group>
                        <input type="submit" value="Add New School" className="btn btn-primary" />
                    </Form>
                </Container>
            </div>
        );
    }
}

export default AddSchool;

import React, {Component} from 'react';
import {Container, Button, Form} from 'react-bootstrap';
import './AddSchool.css';
import Header from "../Header/Header";
import firebase from '../../firebase';

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
            testingInfo: ''
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

        firebase.firestore().collection("schools").add({
            name: this.state.name,
            maskPolicy: this.state.maskPolicy,
            socialDistancingPolicy: this.state.socialDistancing,
            vaccineInfo: this.state.vaccineInfo,
            travelInfo: this.state.travelInfo,
            covidTestingInfo: this.state.testingInfo,
        });
    }

    render() {
        return(
            <div>
                <Header/>
                <br/>
                <br/>
                <br/>
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

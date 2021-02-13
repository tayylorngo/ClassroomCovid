import React, {Component} from 'react';
import {Container, Form, Alert, Button} from 'react-bootstrap';
import './EditSchool.css';
import Header from "../Header/Header";
import fire from '../../firebase';

class EditSchool extends Component{
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
            alertVisible: false,
            schools:[],
        }
    }

    componentDidMount() {
        fire.firestore().collection("schools").orderBy("name").get().then(querySnapshot => {
            const newSchools = [];
            querySnapshot.forEach(doc => {
                const data = doc.data();
                newSchools.push(data);
                console.log(data);
            });
            this.setState({schools: newSchools});
        });
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

        fire.firestore().collection("schools").doc(this.state.name).update({
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
                    variant="primary"
                    onClick={() => {this.setState({alertVisible: false})}}>
                    Successfully edited {this.state.name}!
                    <br/>
                    {' '}<Button id="alertClose" size="sm" onClick={() => {this.setState({alertVisible: false})}} variant="outline-danger">
                    X
                </Button>
                </Alert>
                <h1 className="addSchoolTitle">Edit School Information</h1>
                <Container>
                    <Form className="addSchoolForm" onSubmit={this.onSubmit}>
                        <Form.Group>
                            <h5>School Name:</h5>
                            <select
                                    required
                                    className="form-control"
                                    value={this.state.name}
                                    onChange={this.onChangeName}>
                                {
                                    this.state.schools.map(function(user) {
                                        return <option
                                            key={user.name}
                                            value={user.name}>{user.name}
                                        </option>;
                                    })
                                }
                            </select>
                            <br />
                            <h5>Mask Policy: </h5>
                            <Form.Control
                                onChange={this.onChangeMaskPolicy}
                                as="textarea" rows={3}
                                value={this.state.schools.filter(school => school.maskPolicy === this.state.maskPolicy)}
                            />
                            <br />
                            <h5>Social Distancing Guidelines: </h5>
                            <Form.Control
                                onChange={this.onChangeSocialDistancing}
                                as="textarea" rows={3}
                                value={this.state.schools.filter(school => school.socialDistancingPolicy === this.state.socialDistancingPolicy)}
                            />
                            <br/>
                            <h5>Covid-19 Testing Information: </h5>
                            <Form.Control
                                onChange={this.onChangeTestingInfo}
                                as="textarea"
                                rows={3}
                                value={this.state.schools.filter(school => school.covidTestingInfo === this.state.covidTestingInfo)}
                            />
                            <br/>
                            <h5>Covid-19 Vaccine Information: </h5>
                            <Form.Control
                                onChange={this.onChangeVaccineInfo}
                                as="textarea"
                                rows={3}
                                value={this.state.schools.filter(school => school.vaccineInfo === this.state.vaccineInfo)}
                            />
                            <br/>
                            <h5>Travel & Quarantine Information: </h5>
                            <Form.Control
                                onChange={this.onChangeTravelInfo}
                                as="textarea"
                                rows={3}
                                value={this.state.schools.filter(school => school.travelInfo === this.state.travelInfo)}
                            />
                            <br/>
                        </Form.Group>
                        <input type="submit" value="Edit School" className="btn btn-primary" />
                    </Form>
                </Container>
            </div>
        );
    }
}

export default EditSchool;

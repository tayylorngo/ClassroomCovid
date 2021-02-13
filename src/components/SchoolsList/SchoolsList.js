import React, {Component} from 'react';
import firebase from '../../firebase';
import School from "../School/School";
import Header from "../Header/Header";
import './SchoolsList.css';

class SchoolsList extends Component{

    state = {
        schools: null
    }

    componentDidMount() {
        firebase.firestore().collection("schools").get().then(querySnapshot => {
            const newSchools = [];
            querySnapshot.forEach(doc => {
                const data = doc.data();
                newSchools.push(data);
            });
            this.setState({schools: newSchools});
        });
    }

    render() {
        let schoolList = this.state.schools &&
            this.state.schools.map(school =>
                (
                    <School
                        key={school.name}
                        name={school.name}
                        maskPolicy={school.maskPolicy}
                        socialDistancingPolicy={school.socialDistancingPolicy}
                        covidTestingInfo={school.covidTestingInfo}
                        vaccineInfo={school.vaccineInfo}
                        travelInfo={school.travelInfo}
                    />)
            );
        return (
            <div>
                <Header/>
                <br/>
                <h1 id="title">Total School List</h1>
                <hr/>
                <br/>
                {schoolList}
            </div>
        );
    }
}

export default SchoolsList;
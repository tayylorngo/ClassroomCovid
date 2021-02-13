import React, {Component} from 'react';
import Header from "../Header/Header";
import './HomePage.css';
import {Link, Route} from "react-router-dom";
import fire from'../../firebase';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
        this.authListener = this.authListener.bind(this);
    }

    componentDidMount() {
        this.authListener();
    }

    authListener(){
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            } else {
                this.setState({ user: null });
            }
        })
    }

    render() {
        return(
            <div className="homePageDiv">
                <div id="landing-header">
                    <Header user={this.state.user}/>
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div id="content">
                                        <h1>Classroom Covid</h1>
                                        <h3>The university database for Covid-19 protocols</h3>
                                        <hr></hr>
                                        <Link to="/schools">
                                            <button className="btn btn-default btn-lg" id = "homepageButton"><i aria-hidden="true"></i>
                                                View Schools
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="slideshow">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        );
    }
}
export default HomePage;
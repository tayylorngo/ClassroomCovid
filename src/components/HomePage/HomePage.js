import React, {Component} from 'react';
import Header from "../Header/Header";
import './HomePage.css';

class HomePage extends Component {
    render() {
        return(
            <div className="homePageDiv">
                <Header/>

                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div id="content">
                                    <h1>Classroom Covid</h1>
                                    <h3>The university database for Covid-19 protocols</h3>
                                    <hr></hr>

                                    <button className="btn btn-default btn-lg" id = "homepageButton"><i aria-hidden="true"></i>
                                        View Schools
                                        </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}
export default HomePage;
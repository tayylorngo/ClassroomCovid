import './App.css';
import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import SchoolsList from "./components/SchoolsList/SchoolsList";
import AboutPage from "./components/AboutPage/AboutPage";
import AddSchool from "./components/AddSchool/AddSchool";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import EditSchool from "./components/EditSchool/EditSchool";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Route path="/" exact absolute render={() =>
                    <div>
                        <HomePage />
                    </div>
                }/>
                <Route path="/about" exact absolute render={() =>
                    <div>
                        <AboutPage />
                    </div>
                }/>
                <Route path="/schools" exact absolute render={() =>
                    <div>
                        <SchoolsList />
                    </div>
                }/>
                <Route path="/addschool" exact absolute render={() =>
                    <div>
                        <AddSchool />
                    </div>
                }/>
                <Route path="/editschools" exact absolute render={() =>
                    <div>
                        <EditSchool />
                    </div>
                }/>
                <Route path="/login" exact absolute render={() =>
                    <div>
                        <LoginPage />
                    </div>
                }/>
            </div>
        </BrowserRouter>
    );
}

export default App;

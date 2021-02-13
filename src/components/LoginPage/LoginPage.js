import React, {Component} from "react";
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import './LoginPage.css';
import Header from "../Header/Header";
import fire from '../../firebase';

class LoginPage extends Component{
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signUp = this.signUp.bind(this);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((u) => {
                console.log("Logged in");
            }).catch((error) => {
                console.log(error);
        });
        window.location.replace("/");
    }

    signUp(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(
            (u) => {
                console.log("Logged in");
            }
        ).catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <div className="loginDiv">
                <Header />
                <Container>
                    <Row>
                        <Col>
                            <Form className="loginForm">
                                <h2>Login/Signup Page</h2>
                                <br/>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control name="email" onChange={this.handleChange}  id="email" type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name="password" onChange={this.handleChange} id="password" type="password" placeholder="Password" />
                                </Form.Group>
                                <Button onClick={this.login} variant="success" type="submit">
                                    Login
                                </Button>
                                {' '}
                                <Button onClick={this.signUp} variant="primary" type="submit">
                                    Sign Up
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default LoginPage;
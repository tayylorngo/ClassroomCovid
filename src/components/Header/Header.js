import React, {Component} from 'react';
import {Navbar, Nav, Button} from "react-bootstrap";
import fire from "../../firebase";
import {Link} from "react-router-dom";
import './Header.css';

class Header extends Component {
    render() {
        let loginButton = (<Link to="/login" className="navLink">Login</Link>);
        if(this.props.user){
            loginButton = (<Button onClick={() => {
                fire.auth().signOut();
            }
            }>Logout</Button>)
        }
        return(
            <div>
                <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">Classroom Covid</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/schools" className="navLink">Schools List</Link>
                            <Link to="/about" className="navLink">About Us</Link>
                            <Link to="/addschool" className="navLink">Add School</Link>
                            <Link to="/editschools" className="navLink">Edit Schools</Link>

                        </Nav>
                        <Nav>
                            {loginButton}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;
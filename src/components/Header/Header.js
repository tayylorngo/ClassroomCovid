import React, {Component} from 'react';
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import './Header.css';

class Header extends Component {
    render() {
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
                        </Nav>
                        <Nav>
                            <Nav.Link href="#Login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;
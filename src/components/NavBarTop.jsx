import React from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap"
import Favorites from "./Favorites"

const NavBarTop = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">STARWAR</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {/* <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link> */}
                </Nav>
                <Dropdown className="mr-sm-2">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Favorites
                        </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Favorites></Favorites>
                        {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item> */}
                        {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavBarTop;
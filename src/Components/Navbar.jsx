import React from 'react';
import * as ReactBootStrap from 'react-bootstrap'
import { Link } from '@reach/router'

const Navbar = () => {
    return (
        <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link to="/">
  <ReactBootStrap.Navbar.Brand href="#home">UFC-Site</ReactBootStrap.Navbar.Brand>
  </Link>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
        <Link to="/fighters">
      <ReactBootStrap.Nav.Link href="#features">Fighters</ReactBootStrap.Nav.Link>
      </Link>
      <Link to="/staff">
      
      <ReactBootStrap.Nav.Link href="#pricing">Staff</ReactBootStrap.Nav.Link>
      </Link>

      <Link to="/events">
      
      <ReactBootStrap.Nav.Link href="#pricing">Events</ReactBootStrap.Nav.Link>
      </Link>

      <ReactBootStrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
      <ReactBootStrap.Nav.Link href="#deets">Back-End Site</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
        Store
      </ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
    )
}

export default Navbar;
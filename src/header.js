import React from "react"

import { Link } from "react-router-dom"

import {
  Navbar,
  Nav,
  NavItem
} from "components"

import { LinkContainer } from "react-router-bootstrap"
import WithPermission from "components/WithPermission"

export const header = () => (
  <Navbar staticTop>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">{ process.env.REACT_APP_APPLICATION_NAME }</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Nav pullRight>
      <LinkContainer eventKey={1} to="/" exact>
        <NavItem>Home</NavItem>
      </LinkContainer>
      <LinkContainer eventKey={2} to="/about">
        <NavItem>About Us</NavItem>
      </LinkContainer>
      <LinkContainer eventKey={3} to="/profile">
        <NavItem>User</NavItem>
      </LinkContainer>
      <WithPermission permission="team">
        <LinkContainer eventKey={4} to="/a">
          <NavItem>Admin</NavItem>
        </LinkContainer>
      </WithPermission>
    </Nav>
</Navbar>)

export default header
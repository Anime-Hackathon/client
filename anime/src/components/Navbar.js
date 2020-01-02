import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import { Link } from "react-router-dom";

const CoolNav = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div class="NavBar">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Anime Planet</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <Link to="/">
              <NavLink>Home</NavLink>
            </Link>
            <NavItem>
              <Link to="/signup">
                <NavLink>Sign Up</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/">
                <NavLink>Login</NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default CoolNav;

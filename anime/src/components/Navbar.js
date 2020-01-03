import React, { useState,useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import { Link, useHistory } from "react-router-dom";

import {useSelector, useDispatch} from 'react-redux';
import {LogOut} from "../Actions/Login";

const CoolNav = props => {
  
  const history = useHistory();
  
  const LogginState = useSelector(state=>state.login);
  const dispatch = useDispatch();


  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const signOut =(e)=>{
    e.preventDefault();
    
    dispatch(LogOut());
    localStorage.clear();
    history.push('/')
  }

  return (
    <div class="NavBar">
      <Navbar color="light" light expand="md">
        <img src={require("../imgs/dragonicon.jpeg")} className="icon" />
        <NavbarBrand className='NavText' href="/">Anime Planet</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <Link to="/">
              <NavLink className='NavText'>Home</NavLink>
            </Link>
            <NavItem>
              <Link to="/signup">
                <NavLink className='NavText'>Sign Up</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/">
                <NavLink className='NavText'>Login</NavLink>
              </Link>
            </NavItem>
            
              {
                LogginState.isLoggedIn &&
                <NavItem>
                <button className='NavText' type="submit" onClick={(e)=>signOut(e)}>
                  Signout
                </button>
                </NavItem>
              }
              {
                LogginState.isLoggedIn &&
                <NavItem>
                  <Link to="/prList">
                    <NavLink className='NavText'>CharacterList</NavLink>
                  </Link>
              </NavItem>
              }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default CoolNav;

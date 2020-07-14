import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import rp from "../assets/rp.png";

function Menu() {
  const [ isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const user = localStorage.getItem('user');
  function handleScroll() {
    if (window.scrollY > 50) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return (() => {
      window.removeEventListener('scroll', handleScroll);
    })
  })
  return(
    <div className='menu'>
      <Navbar dark expand="md" className={isOpen || isScroll ? isOpen ? 'open': 'open scroll' : ''}>
          <NavbarBrand href='/'>
            <img src={logo} alt=''/>
          </NavbarBrand>
          <NavbarToggler onClick={toggle}/>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to='/auth/signin' className='d-md-none'>Sign In</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to='/'>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to='/hextech'>Hextech</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to='/profile'>Profile</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          { !user && <Button tag={Link} to='/auth/signin' className='d-none d-md-block ml-auto'>Sign In</Button>}
          { user && <div className='rp'>9999<img src={rp} alt=""/></div>}
      </Navbar>
    </div>
  )
}

export default Menu;
import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Button,
  } from 'reactstrap';
  import navImg from '../images/navimg.jpg';

  const styles = {
    navIcon: {
      borderRight: '2px solid lightgray',
      padding: '12px',
      marginRight: '12px',
    },
    navImg: {
      width: '25px',
      height: '25px',
    },
    butn: {
      border: 'none',
      borderRadius: '20px',
      boxShadow: '2px 2px 2px 1px rgb(252 181 106)',
    },
  }

const Header = ({login, setLogin}) => {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='nav-div'>
        <Navbar expand="md">
        <NavbarBrand href="/">
          <span style={styles.navIcon}><img src={navImg} style={styles.navImg} /></span>
          <span>J. Carter</span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <NavLink to="/">Works</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">
                Testimonials
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">
                FAQ
              </NavLink>
            </NavItem>            
            <NavItem>
              <NavLink to="/">
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">
                More
              </NavLink>
            </NavItem>
          </Nav>
          <Button className='butn' style={styles.butn} onClick={() => {setLogin(true)}}>Login</Button>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header
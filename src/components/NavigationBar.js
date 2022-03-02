import React from 'react'
import '../App.css';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../img/Fodebee-nb2.png';

import SettingsIcon from '@mui/icons-material/Settings';
import FaceIcon from '@mui/icons-material/Face';
import MailIcon from '@mui/icons-material/Mail';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

function NavigationBar() {
  return (
    <Navbar bg="navbarBg" variant='dark' sticky='top'>
      <Navbar.Brand href="/dashboard" className="navbar-branding"><img src={logo} /></Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link href='login'>Sign Out</Nav.Link>
        <Nav.Link href='notification'><CircleNotificationsIcon /></Nav.Link>
        <Nav.Link href='mail'><MailIcon /></Nav.Link>
        <Nav.Link href='profile'><FaceIcon /></Nav.Link>
        <Nav.Link href='settings'><SettingsIcon /></Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default NavigationBar
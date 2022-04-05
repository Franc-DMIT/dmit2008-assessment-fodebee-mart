import React from 'react'
import '../App.css';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../img/Fodebee-nb2.png';

import SettingsIcon from '@mui/icons-material/Settings';
import FaceIcon from '@mui/icons-material/Face';
import MailIcon from '@mui/icons-material/Mail';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

import {signOut} from 'firebase/auth'
import { auth } from '../js/libs/firebase/firebaseConfig'

function NavigationBar() {

  function onLogoutRequest(e) {
    signOut(auth)
  }

  return (
    <Navbar bg="navbarBg" variant='dark' sticky='top'>
      <Navbar.Brand href="/dashboard" className="navbar-branding"><img src={logo} alt="website logo" /></Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link href='login' onClick={onLogoutRequest}>Sign Out</Nav.Link>
        <Nav.Link href='notification'><CircleNotificationsIcon /></Nav.Link>
        <Nav.Link href='mail'><MailIcon /></Nav.Link>
        <Nav.Link href='profile'><FaceIcon /></Nav.Link>
        <Nav.Link href='settings'><SettingsIcon /></Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default NavigationBar
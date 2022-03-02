import React from 'react'
import "../../App";

import Sidebar from '../../components/Sidebar';
import NavigationBar from '../../components/NavigationBar';
import Panels from '../../components/Panels';

import PageNotFound from '../404/PageNotFound';
import LoginPage from '../login/LoginPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

function DashboardPage() {
  return (
    <div className='dashboard'>
        <NavigationBar />

      <div className='content-container'>
        <Sidebar />

        <div className='content'> 
          <Panels />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage
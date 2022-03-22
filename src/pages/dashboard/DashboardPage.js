import React, { useState } from 'react'
import "../../App";

import Sidebar from '../../components/Sidebar';
import NavigationBar from '../../components/NavigationBar';
import Panels from '../../components/panels/Panels';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../js/libs/firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';

// import PageNotFound from '../404/PageNotFound';
// import LoginPage from '../login/LoginPage';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

function DashboardPage(props) {

  const [isUser, setIsUser] = useState(false)

  const navigator = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsUser(true)
    }

    else {
      setIsUser(false)
      // Send user to login page
      navigator('/login')
    }
  });

  if (isUser) {
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
    )
  }

  else {
    return null;
  }

  // return (
  //   <div className='dashboard'>
  //       <NavigationBar />

  //     <div className='content-container'>
  //       <Sidebar />

  //       <div className='content'> 
  //         <Panels />
  //       </div>
  //     </div>
  //   </div>
  // )
}

export default DashboardPage
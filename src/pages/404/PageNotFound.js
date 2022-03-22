import React, {useState} from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import "../../App";

import { Link } from 'react-router-dom';
import {onAuthStateChanged} from 'firebase/auth'
import { auth } from '../../js/libs/firebase/firebaseConfig'

function PageNotFound() {
  const [isUser, setIsUser] = useState(false)

  onAuthStateChanged(auth, (user)=> {
    if(user) {
      setIsUser(true)
    }
    else{
      setIsUser(false)
    }
  })

  return (
    <div className='pageNotFound'>
        <h1 className='errorCode'><ErrorOutlineIcon id='errorIcon' /> {" "}404</h1>
        <p className='pageNotFound-Msg'>Hol' up, this page is not accessible to you</p>
        <p className='pageNotFound-Msg'>OR the page is in the 4th dimension.</p>
        {/* <a href='/dashboard' className='return-link'>Take me back...</a> */}

        {
          isUser ? <Link to='/dashboard'>Take me back...</Link> : <Link to='/'>Take me back...</Link>
        }
    </div>
  )
}

export default PageNotFound
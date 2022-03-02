import React from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import "../../App";

function PageNotFound() {
  return (
    <div className='pageNotFound'>
        <h1 className='errorCode'><ErrorOutlineIcon id='errorIcon' /> {" "}404</h1>
        <p className='pageNotFound-Msg'>Hol' up, this page is not accessible to you</p>
        <p className='pageNotFound-Msg'>OR the page is in the 4th dimension.</p>
        <a href='/dashboard' className='return-link'>Take me back...</a>
    </div>
  )
}

export default PageNotFound
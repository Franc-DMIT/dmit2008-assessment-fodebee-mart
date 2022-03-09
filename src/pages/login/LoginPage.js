import React from 'react'
import styled from 'styled-components';

import signInBg from '../../img/sign-in-bg.jpg';
import LoginPageSidebar from './LoginPageSidebar';
import LoginPageMain from './LoginPageMain';

// import { useNavigate } from 'react-router-dom';
// import {authentication} from './../../libs/firebase/firebaseConfig'
// import { signInWithEmailAndPassword } from '../../js/libs/firebaseConfig';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function LoginPage () {
  return (
    <Containers>
      <Wrapper>
        <LoginPageSidebar />
        <LoginPageMain />
      </Wrapper>
    </Containers>
  )
}

const Containers = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`
const Wrapper = styled.div `
  background-image: url(${signInBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`

export default LoginPage
import React from 'react'
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';

import SidebarLogo from '../../img/Fodebee-nb1.png';
import LoginPageInput from './LoginPageInput';
// import DashboardPage from '../dashboard/DashboardPage';

const LoginPageSidebar = () => {

let navigate = useNavigate();
const loggedIn = () => {
    let path = '/dashboard';
    navigate(path);
}

  return (
    <Containers>
        <LogoWrapper>
            <img src={SidebarLogo} alt="Sidebar form logo" />
            <h3>Fodebee<br />Mart</h3>
        </LogoWrapper>

        <Form>
            <LoginPageInput placeholder="Username" type="text" />
            <LoginPageInput placeholder="Password" type="password" />
            <button onClick={loggedIn}>Sign In</button>
            <div>
                <a href='/login'>Forgot Password?</a>
                <br />
                <a href='/login'>Not a member yet?</a>
            </div>
        </Form>
    </Containers>
  )
}

const Form = styled.form `
    h3 {
        color: #666666;
        margin-bottom: 2rem;
        margin-left: 85px;
    }

    button {
        width: 100%;
        max-width: 250px;
        min-width: 250px;
        height: 35px;
        border: none;
        margin: 1rem 0;
        box-shadow: 0px 14px 9px 15px rgba(0, 0, 0, 0.025);
        border-radius: 8px;
        background-color: #7289da;
        color: whitesmoke;
        font-weight: 600;
        cursor: pointer;
        transition:all 0.2s ease-in;

        &:hover {
            transform: translateY(-3px)
        }
    }
`

const LogoWrapper = styled.div `
    text-align: center;

    img {
        height: 6rem;
    }

    h3 {
        text-align: center;
        font-size: 36px;
        font-weight: 700;
        color: #343434;
    }
`

const Containers = styled.div `
    min-width: 600px;
    backdrop-filter: blur(35px);
    background-color: rgba(244, 244, 244, 0.5);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 2rem;

    @media (max-width: 900px) {
        width: 100vw;
        position: absolute;
        padding: 0;
    }

    a {
        color: #808080;
        cursor: pointer;
        font-weight: 500;
        font-size: 15px;
        margin-top: 2rem;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`

export default LoginPageSidebar
import React from 'react'
import styled from 'styled-components';

const LoginPageMain = () => {
  return (
    <Conatiners>
        <h1>Welcome to <br /> Fodebee!</h1>
    </Conatiners>
  )
}

const Conatiners = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 55px;
        font-weight: 700;
        color: #343434;
    }

    @media (max-width: 900px) {
        display: none;
    }
`

export default LoginPageMain
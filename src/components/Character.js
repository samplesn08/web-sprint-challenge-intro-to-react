// Write your Character component here
import React, { useState, useEffect } from 'react';
import styled, { isStyledComponent } from 'styled-components';
import App from '../App'

const H1 = styled.h1`
    color: grey;
    border-bottom: 2px black dashed;
    font-size: 1.4rem;
`;
const Div = styled.div`
    background-color: white;
    width: 80%auto;
`;


const Character = ({ name, gender, height }) => {
    return <Div>
        <H1>{name}</H1>
        <p>Height: {height}, Gender: {gender}</p>
    </Div>
}

export default Character
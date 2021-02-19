// Write your Character component here
import React from 'react';
import styled from 'styled-components';


const H1 = styled.h1`
    color: grey;
    border-bottom: 2px black dashed;
    font-size: 1.4rem;
    transition: .5s;
    &:hover {
        color: crimson;
    }
`;
const Div = styled.div`
    background-color: white;
    margin: 0 40%;
    box-shadow: 5px 5px 5px #443e3e;
    transition: .5s ease-in-out;
    &:hover {
        transform: scale(1.5);
        color: blue;
    }
`;


const Character = ({ name, gender, height }) => {
    return <Div>
        <H1>{name}</H1>
        <p>Height: {height}, Gender: {gender}</p>
    </Div>
}

export default Character
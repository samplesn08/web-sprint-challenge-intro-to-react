import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Character from './components/Character';
import './App.css';

const apiURL = 'https://swapi.dev/api/people/';

const Header = styled.h1`
  animation: fadein 2s;
  @keyframes fadein {
    from {opacity:0}
    to {opacity: 1}
  } 
`;

const App = () => {
  const [list, setList] = useState({})
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  useEffect(() => {
    axios.get(apiURL)
      .then(res => {
        setList(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const arrayOfChars = Array.from(list)
  return (
    <div className="App">
      <Header key='h1' className="Header">Characters</Header>
      {
        arrayOfChars.map(char => {
          return <Character key={char.url} name={char.name} gender={char.gender} height={char.height}/>
        })
      }
    </div>
  );
}

export default App;

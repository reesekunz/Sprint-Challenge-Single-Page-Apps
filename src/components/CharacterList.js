import React, { useEffect, useState } from 'react';
import axios from "axios";


function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState({});

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      // handles success 
      .then(response => {
        setCharacters(response.results);
      })
      // handles failure 
      .catch(error => {
        console.log('no bueno', error);
      });
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [setCharacters])


console.log(response.results)
  return (
  <section className='character-list grid-view'>
{/* TODO: `array.map()` over your state here! */}
     {/* characters.map(character => {



     } */}
     
     
     
    </section>
  )

    }

export default CharacterList;
import React, { useEffect, useState } from 'react';

function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState();

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    axios
      .get(`https://rickandmortyapi.com/documentation/#get-all-characters`)
      .then(response => {
        setCharacter('component mounted', response.results);
      })
      .catch(error => {
        console.error('no bueno', error);
      });
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [])

  return <section className='character-list grid-view'>

      <h2>TODO: `array.map()` over your state here!</h2>
    </section>

}


export default CharacterList;
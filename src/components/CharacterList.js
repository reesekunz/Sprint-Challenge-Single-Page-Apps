import React, { useEffect, useState } from "react";
import axios from "axios";

function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState({});

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      // handles success
      .then(response => setCharacters(response.characters))
      
      // handles failure
      .catch(error => {
        console.log("no bueno", error);
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      }, []);   
    })

    // Console log handles success to  make sure component mounted 
    console.log("component did mount, characters data = ", characters);
    
    // console.log(results.name);

  
    if (characters.results === undefined) {
    return <div />;
  } else {
    return (
      <div>
        {characters.map(character => {
          return (
         <div> 
              {/* <h3 className="id">Id: {results.id}</h3>
              <h3 className="name">Name: {results.name}</h3>
              <h3 className="status">Status: {results.status}</h3>
              <h3 className="species">Species: {results.species}</h3>
              <h3 className="type">Type: {results.type}</h3>
              <h3 className="gender">Gender: {results.gender}</h3>
              <h3 className="origin">Origin: {results.origin}</h3> */}

            </div>
          );
        })}
      </div>
    );
  }
}

export default CharacterList;

import React, { useEffect, useState } from "react";
import axios from "axios";

import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`

    axios
      // handles success

      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        // Console log handles success to  make sure component mounted

        console.log("Component mounted, data = ", response.data.results);
        setCharacters(response.data.results);
      })
      // Handles failure

      .catch(error => {
        console.error("no bueno", error);
      });
    // Add empty dependency array to avoid infinite API requests
  }, []);
  return (
    <section className="character-list grid-view">
      {characters.map(character => {
        return <CharacterCard key={character.id} {...character} />;
      })}
    </section>
  );
}
export default CharacterList;

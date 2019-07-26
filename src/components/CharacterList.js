import React, { useEffect, useState } from "react";
import axios from "axios";

import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      // handles success
      .then(response => {
        console.log("Component mounted, data = ", response.data.results);
        setCharacters(response.data.results);
      })

      // Handles failure
      .catch(error => console.log("no bueno", error));
    // Add empty dependency array to avoid infinite API requests
  }, []);

  // Console log handles success to  make sure component mounted
  console.log("component did mount, data = ", response.data.results);

  // mapping over and returning each unique character
  return <section className="character-list grid-view">hi</section>;
}

export default CharacterList;

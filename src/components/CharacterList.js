import React, { useEffect, useState } from "react";
import axios from "axios";

import CharacterCard from "./CharacterCard";

function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState({});

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      // handles success
      .then(response => setData(response.data.results))

      // Handles failure
      .catch(error => console.log("no bueno", error));
    // Add empty dependency array to avoid infinite API requests
  }, []);

  // Console log handles success to  make sure component mounted
  console.log("component did mount, data = ", data);
  //console.log(response.data);

  return (

    <div>hi</div>
  )
  


export default CharacterList;

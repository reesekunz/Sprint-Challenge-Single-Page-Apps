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
      .then(resolved => setData(resolved.data))

      // Handles failure
      .catch(error => console.log("uh oh", error));
    // Add empty dependency array to avoid infinite API requests
  }, []);

  // Console log handles success to  make sure component mounted
  console.log("component did mount, data = ", data);

  if (data.results === undefined) {
    return <div />;
  } else {
    return (
      <div>
        {data.results.map((item, index) => {
          return <CharacterCard key={index} data={item} />;
        })}
      </div>
    );
  }
}

export default CharacterList;

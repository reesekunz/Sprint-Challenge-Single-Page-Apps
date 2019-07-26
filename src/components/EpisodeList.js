import React, { useEffect, useState } from "react";
import axios from "axios";

import EpisodeCard from "./EpisodeCard";

function EpisodeList(props) {
  // TODO: Add useState to track data from useEffect
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`

    axios
      // handles success

      .get(`https://rickandmortyapi.com/api/episode/`)
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
      {episdoes.map(episdoe => {
        return <EpisodeCard key={episode.id} {...episode} />;
      })}
    </section>
  );
}
export default EpisodeList;

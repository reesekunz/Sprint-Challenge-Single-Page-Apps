import React from "react";
  // passing props of what is being returned from api data that you want to show for location section

function EpisodeCard ({ name, air_date, episode }) {

  return (
    <div className="character-card">
      <h3 className="Name">Name: {name}</h3>
      <h3 className="Type">Type: {air_date}</h3>
      <h3 className="Dimension">Dimension: {episode}</h3>
  </div> )
}

export default EpisodeCard;

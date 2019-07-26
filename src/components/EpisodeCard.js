import React from "react";
// passing props of what is being returned from api data that you want to show for location section

function LocationCard({ name, air_date, episode, characters, created, url }) {
  return (
    <div className="episode-card">
      <h3 className="Name">Name: {name}</h3>
      <h3 className="AirDate">Air-Date: {air_date}</h3>
      <h3 className="Episode">Episode: {episode}</h3>
      <h3 className="Characters">Characters: {characters}</h3>
      <h3 className="Created">Created: {created}</h3>
      <h3 className="Url">URL: {url}</h3>
    </div>
  );
}

export default EpisodeCard;

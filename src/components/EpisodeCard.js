import React from "react";
// passing props of what is being returned from api data that you want to show for episode section

function EpisodeCard({ name, air_date, episode, characters, url }) {
  // character card order (from mvp preview) - image, name, species, status, location, origin
  return (
    <div className="episode-card">
      <h3 className="Name">Name: {name}</h3>
      <h3 className="AirDate">Air-Date: {air_date}</h3>
      <h3 className="Episode">Episode: {episode}</h3>
      <h3 className="Characters">Characters: {characters}</h3>
      <h3 className="URL">URL: {url}</h3>
    </div>
  );
}

export default EpisodeCard;

import React from "react";

function CharacterCard({
  id, name, status, species, type, gender, origin, name, url, location, image, episode, created }
}
 {
  console.log("props", props);
  console.log("character card name props", props.data.results);

  return (
    <div className="CharacterCard">
      <h3 className="name">Name: {props.results.name}</h3>
      <h3 className="status">Status: {props.results.status}</h3>
      <h3 className="species">Species: {props.results.species}</h3>
      <h3 className="type">Type: {props.results.type}</h3>
      <h3 className="gender">Gender: {props.results.gender}</h3>
      <h3 className="origin">Origin: {props.results.origin}</h3>
    </div>
  );
}

export default CharacterCard;

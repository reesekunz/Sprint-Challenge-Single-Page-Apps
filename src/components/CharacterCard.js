import React from "react";

function CharacterCard(props) {
  console.log("props", props);
  console.log("character card name props", props.data.results);

  return (
    <div className="CharacterCard">
      <h3 className="id">Id: {results.id}</h3>
      <h3 className="name">Name: {results.name}</h3>
      <h3 className="status">Status: {results.status}</h3>
      <h3 className="species">Species: {results.species}</h3>
      <h3 className="type">Type: {results.type}</h3>
      <h3 className="gender">Gender: {results.gender}</h3>
      <h3 className="origin">Origin: {results.origin}</h3>
    </div>
  );
}

export default CharacterCard;

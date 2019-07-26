import React from "react";
  // passing props of what is being returned from api data that you want to show for location section

function LocationCard ({ name, type, dimension, residents }) {

  return (
    <div className="character-card">
      <h3 className="Name">Name: {name}</h3>
      <h3 className="Type">Type: {type}</h3>
      <h3 className="Dimension">Dimension: {dimension}</h3>
  </div> )
}

export default LocationCard;

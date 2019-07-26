import React from "react";
  // passing props of what is being returned from api data that you want to show for location section
  import styled from "styled-components";

  const StyledCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background-color: lightblue;
  width: 40%;
  padding: 2%;
  margin: 3%;
`;

function LocationCard ({ name, type, dimension, residents }) {

  return (
    <StyledCards>
    <div className="character-card">
      <h3 className="Name">Location: {name}</h3>
      <h3 className="Type">Type: {type}</h3>
      <h3 className="Dimension">Dimension: {dimension}</h3>
  </div>
  </StyledCards> )
}

export default LocationCard;

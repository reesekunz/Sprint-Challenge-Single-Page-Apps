import React from "react";
// passing props of what is being returned from api data that you want to show for character section
import styled from "styled-components";

const StyledCards = styled.div`
  border: 1px solid black;
  padding: 2%;
  margin: 3%;
  background-color: black;
  color: white;
`;

function CharacterCard({ image, name, species, status, location, origin }) {
  // character card order (from mvp preview) - image, name, species, status, location, origin
  return (
    <StyledCards>
      <div className="character-card">
        <img src={image} alt="" />
        <h3 className="Name">Name: {name}</h3>
        <h3 className="species">Species: {species}</h3>
        <h3 className="status">Status: {status}</h3>
        <h3 className="location">Location: {location.name}</h3>
        <h3 className="origin">Origin: {origin.name}</h3>
      </div>
    </StyledCards>
  );
}

export default CharacterCard;

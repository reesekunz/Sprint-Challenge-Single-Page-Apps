import React from "react";
// passing props of what is being returned from api data that you want to show for location section
import styled from "styled-components";

const StyledCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background-color: peachpuff;
  width: 40%;
  padding: 2%;
  margin: 3%;
`;

function EpisodeCard({ name, air_date, episode }) {
  return (
    <StyledCards>
      <div className="character-card">
        <h3 className="Name">Episode: {name}</h3>
        <h3 className="Type">Air-Date: {air_date}</h3>
        <h3 className="Dimension">Dimension: {episode}</h3>
      </div>
    </StyledCards>
  );
}

export default EpisodeCard;

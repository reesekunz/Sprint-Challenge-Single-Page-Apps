import React from "react";

import styled from "styled-components";

const StyledCards = styled.div`
  padding: 4%;
  margin: 5%;
`;

const StyledText = styled.h1`
  font-size: 3rem;
  padding: 4%;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <StyledCards>
          <StyledText>Welcome to the ultimate fan site!</StyledText>
          <img
            className="main-img ui centered medium circular image"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
        </StyledCards>
      </header>
    </section>
  );
}

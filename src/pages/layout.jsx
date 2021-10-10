import React from "react";
import styled from "styled-components";
import { Footer } from "../components/footer";
import { Container } from "../components/simple";
export const MainLayoat = ({ children, top }) => {
  return (
    <MainGrid>
      <Container> {top}</Container>
      <ContainerMainContent> {children}</ContainerMainContent>
      <Footer />
    </MainGrid>
  );
};

const MainGrid = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

const ContainerMainContent = styled(Container)`
  padding: 15px;
  flex: 1;
  @media (min-width: 768px) {
    padding: 0px 0px;
  }
`;

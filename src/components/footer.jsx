import React from "react";
import styled from "styled-components";
import { Container } from "./simple";

export const Footer = () => {
  return (
    <ColoredBackgound color="#f0f2f3">
      <Container>
        <Bottom>
          <div>
            <span>Support</span>
            <span>sopa</span>
            <span>Learning</span>
          </div>
          <div className="company">@ 2020 Danila Kozyrkov</div>
        </Bottom>
      </Container>
    </ColoredBackgound>
  );
};

const Bottom = styled.div`
  color: #7f8285;
  display: flex;
  justify-content: space-between;
  padding: 0;
  flex-direction: column;
  @media (min-width: 764px) {
    flex-direction: row;
    align-items: center;
  }
  .company {
    margin-top: 8px;
    @media (min-width: 764px) {
      margin: 0;
    }
  }
  span {
    margin-right: 12px;
    &:hover {
      cursor: pointer;
      color: #e00000;
    }
  }
`;

const ColoredBackgound = styled.div`
  background-color: ${({ color }) => color};
`;

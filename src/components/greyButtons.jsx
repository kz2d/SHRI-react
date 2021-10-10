import React from "react";
import { ReactComponent as PlaySVG } from "../assets/svg/12_play.svg";
import { ReactComponent as SettingSVG } from "../assets/svg/12_cog.svg";
import styled, { css } from "styled-components";

export const RunButton = ({ short, onClick }) => {
  return (
    <RunButtonStyled secondary onClick={onClick}>
      <PlaySVG />
      <span>start</span>
    </RunButtonStyled>
  );
};

export const SettingsButton = ({ short, onClick }) => {
  return (
    <ModuleButton secondary onClick={onClick}>
      <SettingSVG />
      {!short && <span>settings</span>}
    </ModuleButton>
  );
};

export const Button = styled.button`
  background-color: ${({ secondary }) => (secondary ? "#E6E6E6" : "#ffcc00")};
  min-height: 36px;
  min-width: 80px;
  border-radius: 4px;
  border: none;
  padding: 0 20px;
  &:hover {
    background-color: ${({ secondary }) => (secondary ? "#DBDBDB" : "#f2c200")};
  }
  &:focus {
    border: 2px solid ${({ secondary }) => (secondary ? "#B3B3B3" : "#b38f00")};
    padding: 0 18px;
  }
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #f2f2f2;
      border-radius: 4px;
      color: #7f7f7f;

      opacity: 0.5;
      &:hover {
        background-color: #f2f2f2;
      }
    `}
`;

const ModuleButton = styled(Button)`
  display: flex;
  padding: 9px;
  min-height: 0;
  min-width: 0;
  height: fit-content;
  span {
    margin-left: 6px;
    line-height: 8px;
  }
  &:focus {
    padding: 7px;
  }
`;
const RunButtonStyled = styled(ModuleButton)`
  padding: 10px;
  &:focus {
    padding: 8px;
  }
  span {
    @media (max-width: 746px) {
      display: none;
    }
  }
`;

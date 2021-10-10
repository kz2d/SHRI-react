import React from "react";
import styled from "styled-components";
import { MainLayoat } from "./layout";
import { SettingsButton, Button } from "../components/greyButtons";
import { ReactComponent as Tool } from "../assets/svg/logo 3.svg";
import { useHistory } from "react-router-dom";

export const MainPage = () => {
  const history = useHistory();
  return (
    <MainLayoat
      top={
        <Top>
          <h2>School CI server</h2>
          <SettingsButton short />
        </Top>
      }
    >
      <Center>
        <Tool />
        <span>configure everything</span>
        <Button onClick={() => history.push("/settings")}>Open Settings</Button>
      </Center>
    </MainLayoat>
  );
};

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Center = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    margin: 32px 0 24px 0;
  }
`;

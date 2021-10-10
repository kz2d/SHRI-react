import React from "react";
import styled from "styled-components";
import { MainLayoat } from "./layout";
import { SettingsButton, Button, RunButton } from "../components/greyButtons";
import { CommitCard } from "../components/commitCard";
import { Message } from "./message";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import mock from "../assets/mock.json";

export const BuildHistoryPage = () => {
  const history = useHistory();
  const [isMessageShow, setIsMessageShow] = useState(false);
  return (
    <MainLayoat
      top={
        <Top>
          <h2>School CI server</h2>
          <TopButtonContainer>
            <RunButton onClick={() => setIsMessageShow(true)} />
            <SettingsButton short onClick={() => history.push("/settings")} />
          </TopButtonContainer>
        </Top>
      }
    >
      <HistoryContainer>
        {mock.commits.map((item) => (
          <CommitCard {...item} key={item.number} />
        ))}
        <div className="buttonContainer">
          <Button secondary>Show more</Button>
        </div>
      </HistoryContainer>
      {isMessageShow && (
        <Message isShow={isMessageShow} setIsShow={setIsMessageShow} />
      )}
    </MainLayoat>
  );
};

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HistoryContainer = styled.div`
  display: grid;
  gap: 8px;
  .buttonContainer {
    display: grid;
    @media (min-width: 768px) {
      grid-template-columns: auto 1fr;
    }
  }
`;

const TopButtonContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 8px;
`;

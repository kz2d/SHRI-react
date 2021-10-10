import React from "react";
import styled from "styled-components";
import { Input } from "../components/input";
import { Button } from "../components/greyButtons";

export const Message = ({ isShow, setIsShow }) => {
  return (
    <Center>
      <Content>
        <h3>New build</h3>
        <span>Enter the commit hash which you want to build.</span>
        <Input className="inp" placeholder="Commit hash" />
        <Button onClick={() => setIsShow(false)}>Run build</Button>
        <CustomButton onClick={() => setIsShow(false)}>Cancel</CustomButton>
      </Content>
    </Center>
  );
};

const Center = styled.div`
  background-color: #aaaa;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const Content = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;
  grid-template: "h3 h3 h3" "des des des" "inp inp inp" "s s s";
  @media (min-width: 768px) {
    width: 485px;
  }
  h3 {
    grid-area: h3;
    margin-bottom: 5px;
  }
  span {
    grid-area: des;
  }
  div {
    grid-area: inp;
  }
  z-index: 100;
`;

const CustomButton = styled(Button)`
  background: #fff;
  border: 1px solid #0005;
`;

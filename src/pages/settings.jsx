import React from "react";
import styled from "styled-components";
import { MainLayoat } from "./layout";
import { SettingsButton, Button } from "../components/greyButtons";
import { Input, SmallInput } from "../components/input";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

export const SettingsPage = ({ setUser }) => {
  const { register, handleSubmit, watch, formState } = useForm();
  const history = useHistory();
  return (
    <MainLayoat
      top={
        <Top>
          <h2>School CI server</h2>
        </Top>
      }
    >
      <SettingsContainer
        onSubmit={handleSubmit(async (e) => {
          await fetch("https://react-hook-form.com/get-started");
          localStorage.setItem("user", JSON.stringify(e));
          setUser(localStorage.getItem("user"));
          history.push("/");
        })}
      >
        <h3>Settings</h3>
        <p>Configure repository connection and synchronization settings.</p>
        <Input
          label="GitHub repository"
          placeholder="user-name/repo-name"
          register={register("repository", { required: true })}
          required
        />
        <Input
          label="Build command"
          placeholder="lol"
          register={register("command", { required: true })}
        />
        <Input
          label="Main branch"
          placeholder="lol"
          register={register("branch")}
        />
        <SmallInput
          label="Synchronize every"
          placeholder="10"
          mesure="minutes"
          register={register("update")}
          type="number"
        />
        <div className="buttonContainer">
          <Button type="submit" disabled={formState.isSubmitting}>
            Save
          </Button>
          <Button
            disabled={formState.isSubmitting}
            secondary
            onClick={() => history.goBack()}
          >
            Cancel
          </Button>
        </div>
      </SettingsContainer>
    </MainLayoat>
  );
};

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SettingsContainer = styled.form`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
    width: 474px;
    height: 400px;
  }
  .buttonContainer {
    display: grid;
    gap: 12px;
    @media (min-width: 768px) {
      grid-template-columns: auto auto 1fr;
    }
  }
`;

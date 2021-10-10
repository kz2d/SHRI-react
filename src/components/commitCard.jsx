import React from "react";
import "./commitCard.scss";
import { ReactComponent as GreenCircle } from "../assets/svg/done_24.svg";
import { ReactComponent as OrangeCircle } from "../assets/svg/clock_24.svg";
import { ReactComponent as RedCircle } from "../assets/svg/fail_24.svg";
import { ReactComponent as Person } from "../assets/svg/16_user.svg";
import { ReactComponent as Commit } from "../assets/svg/16_code-commit.svg";
import { Date, Time } from "./time";

export const CommitCard = ({
  result,
  id,
  commitMessage,
  branch,
  hash,
  author,
}) => {
  return (
    <div className="cardWithCircle">
      {result == "g" && (
        <>
          <GreenCircle className="circle" />
          <span className="colored-green">#{id}</span>
        </>
      )}
      {result == "p" && (
        <>
          <OrangeCircle className="circle" />
          <span className="colored-green colored-orange">#{id}</span>
        </>
      )}
      {result == "b" && (
        <>
          <RedCircle className="circle" />
          <span className="colored-green colored-red">#{id}</span>
        </>
      )}
      <span className="commit-message">{commitMessage}</span>
      <div className="smallItem branch">
        <Commit />
        <span className="middle">{branch}</span>
        <span className="secondary">{hash}</span>
      </div>
      <div className="smallItem author">
        <Person />
        <span className="middle">{author}</span>
      </div>
      <div className="divider" />
      <Date />
      <Time primary />
    </div>
  );
};

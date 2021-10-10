import React from "react";
import styled from "styled-components";
import { ReactComponent as Calendar } from "../assets/svg/16_calendar.svg";
import { ReactComponent as Clock } from "../assets/svg/16_stopwatch.svg";

export const Date = ({ primary }) => {
  return (
    <Block primary={primary && "primary"}>
      <Calendar />
      <span className="time">21 янв, 12:06</span>
    </Block>
  );
};

export const Time = ({ primary }) => {
  console.log(primary);
  return (
    <Block primary={primary ? true : ""}>
      <Clock />
      <span className="time">1 ч 20 мин</span>
    </Block>
  );
};

const Block = styled.div`
  display: flex;
  ${({ primary }) => (!primary ? "opacity:35%" : null)};
  .time {
    margin: 0 0 0 5px;
  }
`;

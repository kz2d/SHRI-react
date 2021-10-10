import React from "react";
import styled from "styled-components";

export const InputField = (props) => {
  return <InputStyled {...props} {...props.register} />;
};

export const Input = (props) => {
  return (
    <InputContainer>
      <span>{props.label}</span>
      {props.required && <span className="required">*</span>}
      <InputField {...props} />
    </InputContainer>
  );
};

export const SmallInputFiield = (props) => {
  return <SmallInputStyled {...props} />;
};
export const SmallInput = (props) => {
  return (
    <SmallInputContainer>
      <span>{props.label}</span>
      <SmallInputFiield {...props} />
      <h6>{props.mesure}</h6>
    </SmallInputContainer>
  );
};
const InputStyled = styled.input`
  border: 2px solid #d9d9d9;
  border-radius: 4px;
  width: 100%;
  height: 36px;
  padding: 10px 10px 10px 13px;
  outline: none;
  &:focus-visible {
    border-color: #b3b3b3;
  }
`;

const SmallInputStyled = styled(InputStyled)`
  text-align: right;
  min-width: 52px;
  width: 52px;
`;

const SmallInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0 24px 0;
  input {
    margin: 0 8px;
  }
  h6 {
    color: #434445;
  }
`;

const InputContainer = styled.div`
  span {
    line-height: 40px;
  }
  .required {
    color: red;
  }
`;

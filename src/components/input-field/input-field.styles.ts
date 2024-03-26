import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  row-gap: 0.2rem;
  flex-direction: column;
`;

export const InputFieldSet = styled.fieldset`
  width: 100%;
  border-radius: 15px;
  border: 1px solid black;
`;

export const InputFieldLegend = styled.legend`
  color: black;
  font-size: 18px;
  font-weight: 700;
  margin-left: 20px;
  width: fit-content;
`;

export const InputField = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-weight: 500;
  padding: 0.5rem 1.5rem;
  background: transparent;
`;

export const ErrorMessage = styled.p`
  color: red;
  padding: 5px;
  font-size: 12px;
  font-weight: 600;
`;

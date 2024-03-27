import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  row-gap: 0.2rem;
  flex-direction: column;
`;

export const InputFieldSet = styled.fieldset<{ $isError: boolean }>`
  width: 100%;
  border-radius: 12px;
  padding: 0 0 1rem 1rem;
  border: ${({ $isError }) => ($isError ? "1px solid red" : "1px solid black")};
`;

export const InputFieldLegend = styled.legend`
  color: black;
  font-size: 18px;
  font-weight: 700;
  margin-left: 0.2rem;
  width: fit-content;
  padding: 0 0.5rem;
`;

export const InputField = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-weight: 500;
  padding: 0 0.5rem;
  background: transparent;
`;

export const ErrorMessage = styled.p`
  color: red;
  padding: 0.15rem;
  font-size: 12px;
  font-weight: 600;
`;

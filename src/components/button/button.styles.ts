import styled from "styled-components";

type CustomButtonType<T> = {
  $w?: T;
  $padding?: T;
  $fontSize?: T;
  $variant: "outlined" | "covered";
};

export const CustomButton = styled.button<CustomButtonType<string>>`
  transition: 0.5s;
  font-weight: bold;
  border-radius: 12px;
  width: ${({ $w }) => $w || "100%"};
  padding: ${({ $padding }) => $padding || "0.7rem"};
  font-size: ${({ $fontSize }) => $fontSize || "20px"};
  background-color: ${({ $variant }) =>
    $variant === "outlined" ? "transparent" : "#F13030"};
  border: ${({ $variant }) =>
    $variant === "outlined" ? "2px solid black" : "#F13030"};
  color: ${({ $variant }) => ($variant === "outlined" ? "black" : "white")};

  &:hover {
    scale: 1.02;
  }

  &:disabled {
    color: white;
    border: none;
    background: lightgray;
  }
`;

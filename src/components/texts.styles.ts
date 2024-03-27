import styled from "styled-components";

type CustomizableTextType<T> = {
  $w?: T;
  $h?: T;
  $color?: T;
  $size?: T;
  $weight?: T;
  $text?: T;
};

type CustomizableLinkType<S> = CustomizableTextType<S> & {
  $hoverColor?: S;
};

export const CustomizableText = styled.p<CustomizableTextType<string>>`
  padding: 0;
  margin: 0;
  width: ${({ $w }) => $w || "100%"};
  height: ${({ $h }) => $h || "fit-content"};
  color: ${({ $color }) => $color || "black"};
  font-size: ${({ $size }) => $size || "16px"};
  text-align: ${({ $text }) => $text || "left"};
  font-weight: ${({ $weight }) => $weight || "100"};
`;

export const CustomizableLink = styled.a<CustomizableLinkType<string>>`
  margin: 0;
  padding: 0;
  text-decoration: none;
  width: ${({ $w }) => $w || "100%"};
  height: ${({ $h }) => $h || "fit-content"};
  color: ${({ $color }) => $color || "black"};
  font-size: ${({ $size }) => $size || "16px"};
  text-align: ${({ $text }) => $text || "left"};
  font-weight: ${({ $weight }) => $weight || "100"};

  &:hover {
    color: ${({ $hoverColor }) => $hoverColor || "#F13030"};
  }
`;

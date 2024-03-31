import styled from "styled-components";

type ImgContainerPropType = {
  $w: string;
  $h: string;
};

export const SignUpContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SignUpHeader = styled.header`
  width: 100%;
  display: flex;
  padding: 0.5rem 1rem;
  align-items: center;
`;

export const ImgContainer = styled.img<ImgContainerPropType>`
  cursor: pointer;
  width: ${({ $w }) => $w};
  height: ${({ $h }) => $h};
`;

export const SignUpForm = styled.form`
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  row-gap: 1.5rem;
  flex-direction: column;
`;

export const SignUpFormHeader = styled.header`
  width: 100%;
  display: flex;
  row-gap: 7px;
  flex-direction: column;
`;

export const SignUpFormBody = styled.section`
  width: 100%;
  padding: 1rem;
  row-gap: 50px;
  flex-direction: column;
`;

export const InputFieldContainer = styled.section`
  width: 100%;
  display: flex;
  row-gap: 1.2rem;
  flex-direction: column;
`;

export const SubmitButtonContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 2rem 0;
  row-gap: 1rem;
  flex-direction: column;
`;

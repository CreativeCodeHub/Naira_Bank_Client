import {
  ImgContainer,
  InputFieldContainer,
  SignUpContainer,
  SignUpForm,
  SignUpFormBody,
  SignUpFormHeader,
  SignUpHeader,
  SubmitButtonContainer,
} from "./components/sign-up.styles";
import {
  CustomizableLink,
  CustomizableText,
} from "../../components/texts.styles";
import FormField from "../../components/input-field";

function SignUp() {
  return (
    <SignUpContainer>
      <SignUpHeader>
        <ImgContainer src="./arrow_back.svg" $w="35px" $h="35px" />
      </SignUpHeader>

      <SignUpForm>
        <SignUpFormHeader>
          <CustomizableText $size="30px" $weight="bolder" $text="center">
            Create an account
          </CustomizableText>

          <CustomizableText $weight="600" $text="center">
            Please fill in your personal information
          </CustomizableText>
        </SignUpFormHeader>

        <SignUpFormBody>
          <InputFieldContainer>
            <FormField />
            <FormField />
            <FormField />
            <FormField />
            <FormField />
          </InputFieldContainer>

          <SubmitButtonContainer>
            <CustomizableText $weight="600" $size="18px" $text="center">
              Already have an account?{" "}
              <CustomizableLink href="/login" $weight="900" $size="20px">
                Login
              </CustomizableLink>
            </CustomizableText>
          </SubmitButtonContainer>
        </SignUpFormBody>
      </SignUpForm>
    </SignUpContainer>
  );
}

export default SignUp;

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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

import SignUpSchema from "./sign-up-form.schema";
import { SignUpFormType } from "../../types/auth.types";
import FormField from "../../components/form-input-field";
import { CustomButton } from "../../components/button/button.styles";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignUpFormType>({
    resolver: zodResolver(SignUpSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onsubmit = (signUpData: SignUpFormType): SignUpFormType => signUpData;

  return (
    <SignUpContainer>
      <SignUpHeader>
        <ImgContainer src="./arrow_back.svg" $w="35px" $h="35px" />
      </SignUpHeader>

      <SignUpForm onSubmit={handleSubmit(onsubmit)}>
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
            <FormField
              errors={errors}
              label="Username"
              name="username"
              type="string"
              register={register}
            />

            <FormField
              errors={errors}
              label="Password"
              name="password"
              type="password"
              register={register}
            />

            <FormField
              errors={errors}
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              register={register}
            />

            <FormField
              errors={errors}
              label="Email"
              name="email"
              type="email"
              register={register}
            />

            <FormField
              errors={errors}
              label="Phone"
              name="phone"
              type="tel"
              register={register}
            />
          </InputFieldContainer>

          <SubmitButtonContainer>
            <CustomizableText $weight="600" $text="center">
              Already have an account?{" "}
              <CustomizableLink href="/login" $weight="900" $size="18px">
                Login
              </CustomizableLink>
            </CustomizableText>

            <CustomButton
              disabled={!isValid}
              type="submit"
              $padding="1.2rem"
              $variant="covered">
              Register
            </CustomButton>
          </SubmitButtonContainer>
        </SignUpFormBody>
      </SignUpForm>
    </SignUpContainer>
  );
}

export default SignUp;

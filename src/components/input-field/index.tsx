import {
  ErrorMessage,
  InputContainer,
  InputFieldSet,
  InputFieldLegend,
  InputField,
} from "./input-field.styles";

function FormField() {
  return (
    <InputContainer>
      <InputFieldSet>
        <InputFieldLegend>Username</InputFieldLegend>
        <InputField />
      </InputFieldSet>
      <ErrorMessage>this field is required</ErrorMessage>
    </InputContainer>
  );
}

export default FormField;

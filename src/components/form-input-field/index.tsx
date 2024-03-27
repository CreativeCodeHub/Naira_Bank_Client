import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

import {
  ErrorMessage,
  InputContainer,
  InputFieldSet,
  InputFieldLegend,
  InputField,
} from "./input-field.styles";
import { FieldNames } from "../../types/auth.types";

type FormFieldType<T extends FieldValues> = {
  type: string;
  label: string;
  name: FieldNames;
  errors: FieldErrors<T>;
  register: UseFormRegister<T>;
};

function FormField<T extends FieldValues>({
  type,
  name,
  label,
  errors,
  register,
}: FormFieldType<T>) {
  const isError = !!errors[name]?.message;
  const errorMessage = errors[name] && `${errors[name]?.message} `;

  return (
    <InputContainer>
      <InputFieldSet $isError={isError}>
        <InputFieldLegend>{label}</InputFieldLegend>
        <InputField type={type || "text"} {...register(name as Path<T>)} />
      </InputFieldSet>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputContainer>
  );
}

export default FormField;

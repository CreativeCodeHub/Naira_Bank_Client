import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import { FormEvent, useLayoutEffect, useState } from "react";

import {
  ErrorMessage,
  InputContainer,
  InputFieldSet,
  InputFieldLegend,
  InputField,
} from "./input-field.styles";
import { FieldNames } from "../../../../types/auth.types";

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
}: FormFieldType<T>): JSX.Element {
  const isError = !!errors[name]?.message;
  const errorMessage = errors[name] && `${errors[name]?.message} `;

  const [cachedValue, setCachedValue] = useState<string>("");

  useLayoutEffect(() => setCachedValue(localStorage[name]), []);

  const handleCaching = (event: FormEvent<HTMLInputElement>): void => {
    localStorage[name] = event.currentTarget.value;
  };

  return (
    <InputContainer>
      <InputFieldSet $isError={isError}>
        <InputFieldLegend>{label}</InputFieldLegend>
        <InputField
          type={type || "text"}
          onInput={handleCaching}
          defaultValue={cachedValue}
          {...register(name as Path<T>)}
        />
      </InputFieldSet>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputContainer>
  );
}

export default FormField;

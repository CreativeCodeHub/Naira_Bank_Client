import { FieldErrors } from "react-hook-form";
import { SignUpFormType } from "../../types/auth.types";

export const confirmFormValidity = (
  errors: FieldErrors<SignUpFormType>
): boolean => {
  let isValid = false;

  const errorObjectLength = Object.keys(errors).length;

  if (errorObjectLength === 0) {
    isValid = true;
  } else {
    isValid = false;
  }

  return isValid;
};

export const clearUserCacheData = (userDataObj: SignUpFormType): void => {
  const userDataKey = Object.keys(userDataObj);

  userDataKey.forEach((key) => localStorage.removeItem(key));
};

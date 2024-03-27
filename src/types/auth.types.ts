export type SignUpFormType = {
  email: string;
  phone: string;
  username: string;
  password: string;
  confirmPassword: string;
};

export type FieldNames =
  | "phone"
  | "email"
  | "username"
  | "password"
  | "confirmPassword";

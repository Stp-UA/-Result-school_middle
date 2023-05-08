import { InputTypesSignIn } from "./SignIn";
import isEmail from "validator/lib/isEmail";

const MIN_LENGTH = 6;
const MAX_LENGTH = 12;

const validateEmail = (email: string) => {
  console.log("####### validateEmail = ", email);
  if (!email) {
    return {
      type: "required",
      message: "Это обязательное поле",
    };
  }
  if (!isEmail(email)) {
    return {
      type: "incorrect",
      message: "некорректный email",
    };
  }
  return undefined;
};

const validatePwd = (password: string) => {
  const len = password.length;
  if (!len)
    return {
      type: "required",
      message: "Это обязательное поле",
    };
  if (len < MIN_LENGTH)
    return {
      type: "tooshort",
      message: "Пароль слишком короткий",
    };
  if (len > MAX_LENGTH)
    return {
      type: "toolong",
      message: "Пароль слишком длинный",
    };
  return undefined;
};

export function validateSignIn(values: InputTypesSignIn) {
  const errEmail = validateEmail(values.email);
  const errPwd = validatePwd(values.password);
  if (errEmail && errPwd) {
    return {
      email: errEmail,
      password: errPwd,
    };
  } else if (errEmail) {
    return {
      email: errEmail,
    };
  } else if (errPwd) {
    return {
      password: errPwd,
    };
  } else {
    return {};
  }
}

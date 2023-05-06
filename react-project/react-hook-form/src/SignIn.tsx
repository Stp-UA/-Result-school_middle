import { useForm, SubmitHandler } from "react-hook-form";
import isEmail from "validator/lib/isEmail";
import "./sign.css";

const MIN_LENGTH = 6;
const MAX_LENGTH = 12;

type InputTypes = {
  email: string;
  password: string;
};

const validateEmail = (email: string) => {
  console.log("####### validateEmail = ", email);
  if (!email) {
    console.log("####### validateEmail = required");
    return {
      type: "required",
      message: "Это обязательное поле",
    };
  }
  if (!isEmail(email)) {
    console.log("####### validateEmail = incorrect");
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

const validateForm = (values: InputTypes) => {
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
};

function SignIn() {
  const { register, handleSubmit, formState } = useForm<InputTypes>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: (values) => {
      return {
        values: values,
        errors: validateForm(values),
      };
    },
  });

  //   const red = (e: FieldErrors<InputsTypes>) => {
  //     if (Boolean(e)) {
  //       return { color: "red" };
  //     } else {
  //       return {};
  //     }
  //   };

  const onSubmit: SubmitHandler<InputTypes> = (data) => {
    console.log(data);
  };

  return (
    <div className="form_auth_block">
      <p className="form_auth_block_head_text">Авторизация</p>
      <form className="form_auth_style" onSubmit={handleSubmit(onSubmit)}>
        <label>Введите Ваш email:</label>
        <input
          {...register("email", {
            // validate: (input) => validateEmail(input),
          })}
          placeholder="Ваш email"
        />
        {formState.isDirty && formState.errors.email && (
          <span className="form_auth_error">
            {formState.errors.email.message}
          </span>
        )}
        <label>Введите Ваш пароль:</label>
        <input
          {...register("password", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
          placeholder="Ваш пароль"
        />
        {formState.isDirty && formState.errors.password && (
          <span className="form_auth_error">
            {formState.errors.password.message}
          </span>
        )}
        <button className="form_auth_button" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}

export default SignIn;

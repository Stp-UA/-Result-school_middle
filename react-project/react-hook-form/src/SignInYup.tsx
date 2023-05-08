import { useForm, SubmitHandler } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./sign.css";

// Для использования Yup необходимо подключить Yup и @hookform/resolvers
//  пример использования смотри ниже

type InputTypesSignIn = {
  email: string;
  password: string;
};

const validationSchema = object({
  email: string()
    .required("поле должно быть заполнено")
    .email("некорректный email"),
  password: string()
    .required("поле должно быть заполнено")
    .min(6, "минимальная длина 6 символов")
    .max(12, "макимальная длина 12 символов"),
});

function SignInYup() {
  const { register, handleSubmit, formState } = useForm<InputTypesSignIn>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<InputTypesSignIn> = (data) => {
    console.log(data);
  };

  return (
    <div className="form_auth_block">
      <p className="form_auth_block_head_text">Авторизация</p>
      <form className="form_auth_style" onSubmit={handleSubmit(onSubmit)}>
        <label>Введите Ваш email:</label>
        <input
          {...register("email", {
            required: true,
          })}
          placeholder="Ваш email"
        />
        {formState.touchedFields.email && formState.errors.email && (
          <span className="form_auth_error">
            {formState.errors.email.message}
          </span>
        )}
        <label>Введите Ваш пароль:</label>
        <input
          {...register("password", {
            required: true,
          })}
          placeholder="Ваш пароль"
        />
        {formState.touchedFields.password && formState.errors.password && (
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

export default SignInYup;

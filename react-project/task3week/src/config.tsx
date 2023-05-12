import { useForm, SubmitHandler } from "react-hook-form";
// import { validateConfig } from "./validation";
import "./css/config.css";

export type PropsTypes = {
  placeholder: string;
  label: string;
  description: string;
  error: string;
  variant: "default" | "filled" | "unstyled";
  radius: "1" | "2" | "3" | "4" | "5";
  size: "1" | "2" | "3" | "4" | "5";
  disabled: Boolean;
  required: Boolean;
};

function Config() {
  const { register, handleSubmit } = useForm<PropsTypes>({
    mode: "onBlur",
    defaultValues: {
      placeholder: "Your name",
      label: "Full name",
      description: "description",
      error: "error",
      variant: "default",
      radius: "3",
      size: "1",
      disabled: false,
      required: true,
    },
  });

  const onSubmit: SubmitHandler<PropsTypes> = (data) => {
    console.log(data);
  };

  return (
    <div id="full-container">
      <div id="result" className="size-4">
        <label id="result-label" htmlFor="placeholder">
          Full name
          <span className="red"> * </span>
        </label>
        <div className="result-description size-3" id="result-description-id">
          description
        </div>
        <input
          className="text-input size-4 border-2"
          id="result-placeholder"
          type="text"
          placeholder="Your name"
        />
        <div className="red" id="result-error">
          error
        </div>
      </div>
      <form id="params-container" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            <b>Placeholder</b>
            <input
              {...register("placeholder")}
              className="text-input"
              type="text"
            />
          </label>
        </div>
        <div className="margin-top">
          <label>
            <b>Label</b>
            <input {...register("label")} className="text-input" type="text" />
          </label>
        </div>
        <div className="margin-top">
          <label>
            <b>Description</b>
            <input
              {...register("description")}
              className="text-input"
              type="text"
            />
          </label>
        </div>
        <div className="margin-top">
          <label>
            <b>Error</b>
            <input {...register("error")} className="text-input" type="text" />
          </label>
        </div>
        <div className="margin-top">
          <label htmlFor="variant-input">
            <b>Variant</b>
          </label>
          <div className="relative-div">
            <select {...register("variant")} className="text-input pointer">
              <option value="default" selected>
                Default
              </option>
              <option value="filled">Filled</option>
              <option value="unstyled">Unstyled</option>
            </select>
            <div className="arrow">
              <img className="img-arrow" src="../public/arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="margin-top">
          <label {...register("radius")} htmlFor="radius-input">
            <b>Radius</b>
          </label>
          <div className="relative-div">
            <select className="text-input pointer" id="radius-input">
              <option value="0">0%</option>
              <option value="1">25%</option>
              <option value="2">50%</option>
              <option value="3">75%</option>
              <option value="4">100%</option>
            </select>
            <div className="arrow">
              <img className="img-arrow" src="../public/arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="margin-top">
          <label {...register("size")} htmlFor="size-input">
            <b>Size</b>
          </label>
          <div className="relative-div">
            <select className="text-input pointer" id="size-input">
              <option value="0">extra small</option>
              <option value="1" selected>
                small
              </option>
              <option value="2">medium</option>
              <option value="3">large</option>
              <option value="4">extra large</option>
            </select>
            <div className="arrow">
              <img className="img-arrow" src="../public/arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="margin-top">
          <div className="flex">
            <input
              {...register("disabled")}
              id="disabled-input"
              type="checkbox"
            />
            <label htmlFor="disabled-input" className="toggle-label1">
              <div className="toggle-div1"></div>
              <div className="toggle-div2"></div>
            </label>
            <div>
              <label className="toggle-label2" htmlFor="disabled-input">
                Disabled
              </label>
            </div>
          </div>
        </div>
        <div className="margin-top">
          <div className="flex">
            <input
              {...register("required")}
              id="required-input"
              type="checkbox"
              checked
            />
            <label htmlFor="required-input" className="toggle-label1">
              <div className="toggle-div1"></div>
              <div className="toggle-div2"></div>
            </label>
            <div>
              <label className="toggle-label2" htmlFor="required-input">
                Required
              </label>
            </div>
          </div>
        </div>
        <button className="margin-top" type="submit">
          Принять изменения
        </button>
      </form>
    </div>
  );
}

export default Config;

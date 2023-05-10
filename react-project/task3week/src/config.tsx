import "./css/config.css";

function Config() {
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
      <div id="params-container">
        <div>
          <label
            className="font-bold"
            htmlFor="placeholder-input"
            id="placeholder-label"
          >
            Placeholder
          </label>
          <input
            className="text-input"
            id="placeholder-input"
            type="text"
            placeholder="Placeholder"
            value="Your name"
          />
        </div>
        <div className="margin-top">
          <label className="font-bold" htmlFor="label-input" id="label-label">
            Label
          </label>
          <input
            className="text-input"
            id="label-input"
            type="text"
            placeholder="Label"
            value="Full name"
          />
        </div>
        <div className="margin-top">
          <label
            className="font-bold"
            htmlFor="description-input"
            id="description-label"
          >
            Description
          </label>
          <input
            className="text-input"
            id="description-input"
            type="text"
            placeholder="Description"
            value=""
          />
        </div>
        <div className="margin-top">
          <label className="font-bold" htmlFor="error-input" id="error-label">
            Error
          </label>
          <input
            className="text-input"
            id="error-input"
            type="text"
            placeholder="Error"
            value=""
          />
        </div>
        <div className="margin-top">
          <label
            className="font-bold"
            htmlFor="variant-input"
            id="variant-label"
          >
            Variant
          </label>
          <div className="relative-div">
            <select className="text-input pointer" id="variant-input">
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
          <label
            className="font-bold"
            htmlFor="variant-input"
            id="radius-label"
          >
            Radius
          </label>
          <div className="relative-div">
            <select className="text-input pointer" id="radius-input">
              <option value="0">0%</option>
              <option value="1" selected>
                25%
              </option>
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
          <label className="font-bold" htmlFor="size-input" id="size-label">
            Size
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
            <input id="disabled-input" type="checkbox" value="false" />
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
            <input id="required-input" type="checkbox" value="false" checked />
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
      </div>
    </div>
  );
}

export default Config;

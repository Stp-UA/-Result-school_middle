import { useForm } from "react-hook-form";

import React, { useRef, useState } from "react";
import "./css/App.css";

function App() {
  console.log("#### render #####");

  const clear = {
    name: "",
    lastName: "",
    middleName: "",
  };

  // const [state, setState] = useState(clear)
  const inputs = useRef(clear);

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    inputs.current = {
      ...inputs.current,
      [event.target.name]: event.target.value,
    };
    console.log("===== Handle === ", inputs.current);
  };

  // const handleSubmit = () => {
  //   console.log('===== Submit1 === ', inputs.current)
  //   setState(inputs.current)
  //   inputs.current = clear
  //   console.log('===== Submit2 === ', state)
  // }

  return (
    <div className="App">
      <input
        value={inputs.current.name}
        type="text"
        placeholder="Имя"
        name="name"
        onChange={handleChange}
      />
      <input
        value={inputs.current.lastName}
        type="text"
        placeholder="Фамилия"
        name="lasttName"
        onChange={handleChange}
      />
      <input
        value={inputs.current.middleName}
        type="text"
        placeholder="Отчество"
        name="middleName"
        onChange={handleChange}
      />
      {/* <button onClick={handleSubmit}>Submit</button> */}
    </div>
  );
}

export default App;

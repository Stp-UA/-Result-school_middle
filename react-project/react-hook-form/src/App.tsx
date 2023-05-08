import React from "react";
import "./App.css";
import SignIn from "./SignIn";
import SignInYup from "./SignInYup";

function App() {
  return (
    <div className="App">
      <SignIn />
      <div>Просто разделитель</div>
      <SignInYup />
    </div>
  );
}

export default App;

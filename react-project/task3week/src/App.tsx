import SignIn from "./signIn";
import Config from "./config";
import "./css/App.css";

function App() {
  console.log("#### render #####");

  return (
    <>
      <SignIn />;
      <Config />
    </>
  );
}

export default App;

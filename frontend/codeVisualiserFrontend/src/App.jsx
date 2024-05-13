import "./App.css";
import Login from "./components/login/Login";
import Signup from "./components/signup/signup";
import Upload from "./components/upload/Upload";
import ThemeToggle from "./components/utility/theme/ThemeToggle";

function App() {
  return (
    <>
      <ThemeToggle />
      <Login />
      <Upload />

      {/* <Signup /> */}
    </>
  );
}

export default App;

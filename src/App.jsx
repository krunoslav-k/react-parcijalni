import { useState } from "react";
import "./App.css";
import UserFormComponent from "./components/UserFormComponent";

function App() {
  const [username, setUsername] = useState("");

  function handleSubmit() {}

  return (
    <>
      <UserFormComponent
        username={username}
        onUsernameChange={setUsername}
        onSubmit={handleSubmit}
      ></UserFormComponent>
    </>
  );
}

export default App;

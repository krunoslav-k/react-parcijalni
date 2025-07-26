import { useState } from "react";
import "./App.css";
import UserFormComponent from "./components/UserFormComponent/UserFormComponent";
import UserDetailsComponent from "./components/UserDetailsComponent/UserDetailsComponent";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);

  const handleSubmit = async () => {
    try {
      const userResponse = await fetch(
        `https://api.github.com/users/${username}`
      );
      const userJson = await userResponse.json();
      const reposResponse = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const reposJson = await reposResponse.json();

      setUserData(userJson);
      setRepos(reposJson);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  function resetUser() {
    setUserData(null);
  }

  return (
    <>
      {!userData && (
        <UserFormComponent
          username={username}
          onUsernameChange={setUsername}
          onSubmit={handleSubmit}
        ></UserFormComponent>
      )}

      {userData && (
        <UserDetailsComponent
          userAvatarSrc={userData.avatar_url}
          username={username}
          userBio={userData.bio}
          userLocation={userData.location}
          onReset={resetUser}
          userRepos={repos}
        ></UserDetailsComponent>
      )}
    </>
  );
}

export default App;

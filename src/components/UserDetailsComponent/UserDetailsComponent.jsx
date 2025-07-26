import PropTypes from "prop-types";
import styles from "./UserDetailsComponent.module.css";
import RepoListComponent from "../RepoListComponent/RepoListComponent";

export default function UserDetailsComponent({
  userAvatarSrc,
  username,
  userBio,
  userLocation,
  onReset,
  userRepos,
}) {
  return (
    <div className={styles.userDetailsContainer}>
      <div className={styles.userHeader}>
        <img
          src={userAvatarSrc}
          alt="user avatar"
          className={styles.userAvatar}
        />
        <h1 className={styles.userName}>{username}</h1>
      </div>

      <p className={styles.userBio}>BIO: {userBio}</p>
      <p className={styles.userLocation}>LOCATION: {userLocation}</p>

      <RepoListComponent repos={userRepos}></RepoListComponent>

      <button className={styles.resetButton} onClick={onReset}>
        Reset
      </button>
    </div>
  );
}

UserDetailsComponent.proptypes = {
  userAvatarSrc: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  userBio: PropTypes.string.isRequired,
  userLocation: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  userRepos: PropTypes.array.isRequired,
};

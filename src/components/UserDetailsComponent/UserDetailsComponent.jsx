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

      <p className={`${styles.userBio} ${styles.detailsLabel}`}>
        <strong>BIO:</strong> {userBio}
      </p>
      <p className={`${styles.userLocation} ${styles.detailsLabel}`}>
        <strong>LOCATION:</strong> {userLocation}
      </p>
      <p className={`${styles.reposLabel} ${styles.detailsLabel}`}>
        <strong>REPOSITORIES:</strong>
      </p>
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

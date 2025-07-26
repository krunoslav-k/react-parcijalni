import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./UserDetailsComponent.module.css";
import sharedStyles from "../../styles/sharedStyles.module.css";
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
    <div className={clsx(styles.userDetailsContainer, sharedStyles.container)}>
      <div className={styles.userHeader}>
        <img
          src={userAvatarSrc}
          alt="user avatar"
          className={styles.userAvatar}
        />
        <h1 className={styles.userName}>{username}</h1>
      </div>

      <p className={clsx(styles.userBio, styles.detailsLabel)}>
        <strong>BIO:</strong> {userBio}
      </p>
      <p className={clsx(styles.userLocation, styles.detailsLabel)}>
        <strong>LOCATION:</strong> {userLocation}
      </p>
      <p className={clsx(styles.reposLabel, styles.detailsLabel)}>
        <strong>REPOSITORIES:</strong>
      </p>
      <RepoListComponent repos={userRepos}></RepoListComponent>

      <button
        className={clsx(styles.resetButton, sharedStyles.baseField)}
        onClick={onReset}
      >
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

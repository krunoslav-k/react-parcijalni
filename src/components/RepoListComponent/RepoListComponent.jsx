import PropTypes from "prop-types";
import styles from "./RepoListComponent.module.css";

export default function RepoListComponent({ repos }) {
  return (
    <div className={styles.reposListWrapper}>
      <ul className={styles.reposList}>
        {repos.map((repo) => (
          <li key={repo.id} className={styles.repoItem}>
            {repo.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

RepoListComponent.propTypes = {
  repos: PropTypes.array.isRequired,
};

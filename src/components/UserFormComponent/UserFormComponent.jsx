import PropTypes from "prop-types";
import styles from "./UserFormComponent.module.css";

export default function UserFormComponent({
  username,
  onUsernameChange,
  onSubmit,
}) {
  const handleChange = (e) => {
    onUsernameChange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className={styles.userFormWrapper}>
      <form className={styles.userForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="e.g. facebook"
          value={username}
          onChange={handleChange}
          className={styles.userFormInput}
        />
        <button type="submit" className={styles.userFormButton}>
          GO!
        </button>
      </form>
    </div>
  );
}

UserFormComponent.propTypes = {
  username: PropTypes.string.isRequired,
  onUsernameChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

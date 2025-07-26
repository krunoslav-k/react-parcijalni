import PropTypes from "prop-types";
import styles from "./FormComponent.module.css";

export default function FormComponent({
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
        <label htmlFor="usernameInput" className={styles.userFormLabel}>
          GITHUB USERNAME:
        </label>
        <input
          id="usernameInput"
          type="text"
          placeholder="e.g. facebook"
          value={username}
          onChange={handleChange}
          className={`${styles.userFormInput} ${styles.userFormElement}`}
        />
        <button
          type="submit"
          className={`${styles.userFormButton} ${styles.userFormElement}`}
        >
          GO!
        </button>
      </form>
    </div>
  );
}

FormComponent.propTypes = {
  username: PropTypes.string.isRequired,
  onUsernameChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

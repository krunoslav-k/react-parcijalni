import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./FormComponent.module.css";
import sharedStyles from "src/styles/sharedStyles.module.css";

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
    <form
      className={clsx(styles.userForm, sharedStyles.container)}
      onSubmit={handleSubmit}
    >
      <label htmlFor="usernameInput" className={styles.userFormLabel}>
        GITHUB USERNAME:
      </label>

      <input
        id="usernameInput"
        type="text"
        placeholder="e.g. facebook"
        value={username}
        onChange={handleChange}
        className={clsx(styles.userFormInput, sharedStyles.baseField)}
      />

      <button
        type="submit"
        className={clsx(sharedStyles.baseButton, sharedStyles.baseField)}
      >
        GO!
      </button>
    </form>
  );
}

FormComponent.propTypes = {
  username: PropTypes.string.isRequired,
  onUsernameChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

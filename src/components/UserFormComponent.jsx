import PropTypes from "prop-types";

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
    <div className="user-form-wrapper">
      <form className="user-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="e.g. facebook"
          value={username}
          onChange={handleChange}
          className="user-form-input"
        />
        <button type="submit" className="user-form-button">
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

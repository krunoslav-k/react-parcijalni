import PropTypes from "prop-types";

export default function UserDetailsComponent({
  userAvatarSrc,
  username,
  userBio,
  userLocation,
  onReset,
}) {
  return (
    <div className="user-details-container">
      <div className="user-header">
        <img src={userAvatarSrc} alt="user avatar" className="user-avatar" />
        <h1 className="user-name">{username}</h1>
      </div>

      <p className="user-bio">BIO: {userBio}</p>
      <p className="user-location">LOCATION: {userLocation}</p>

      <>RepoListComponent holder</>

      <button className="reset-button" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}

import React from "react";

const ProfilePage = () => {
  const user = JSON.parse(localStorage.getItem("loggedUser"));

  return (
    <div className="account-container">
      <h3>Account Settings</h3>

      <div className="profile-card">
        <img
          src="https://www.w3schools.com/howto/img_avatar2.png"
          alt="profile"
          className="profile-pic"
        />

        <div className="profile-details">
          <h4>{user?.fullName || "Guest User"}</h4>
          <p>{user?.email || "No Email"}</p>
          <p>
            Welcome to your profile. This data is dynamic based on login.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
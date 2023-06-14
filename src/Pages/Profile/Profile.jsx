import React from "react";
import "./profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profileWrapper">
        <div className="profile-top">
          <div className="profile-cover"></div>
          <div className="profile-img-and-name">
            <div className="profile-img">
              <img
                src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                alt=""
              />
            </div>
            <div className="name-and-buttons">
              <div className="name">
                <h1>Tushar Malankiya</h1>
                <p>Update Your photo and personal details</p>
              </div>
              <div className="buttons">
                <button type="button">Save</button>
                <button type="button">Cancel</button>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-main">
          <div className="profile-main-field">
            <div className="profile-main-titles">
              <h3>Username</h3>
            </div>
            <div className="profile-main-details">
              <input type="text" defaultValue="tusharmalankiya" />
            </div>
          </div>
          <div className="profile-main-field">
            <div className="profile-main-titles">
              <h3>First Name</h3>
            </div>
            <div className="profile-main-details">
              <input type="text" defaultValue="Tushar" />
            </div>
          </div>
          <div className="profile-main-field">
            <div className="profile-main-titles">
              <h3>Last Name</h3>
            </div>
            <div className="profile-main-details">
              <input type="text" defaultValue="Malankiya" />
            </div>
          </div>
          <div className="profile-main-field">
            <div className="profile-main-titles">
              <h3>Your Photo</h3>
              <p>This will be displayed on your profile</p>
            </div>
            <div className="profile-main-details">
              <div className="profile-photo-container">
                <img
                  src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                  alt=""
                  className="profile-photo"
                />
                <div className="profile-photo-buttons">
                  <span>Update</span>
                  <span>Delete</span>
                </div>
              </div>
            </div>

          </div>

          <div className="profile-main-field">
            <div className="profile-main-titles">
              <h3>Email</h3>
            </div>
            <div className="profile-main-details">
              <input type="email" defaultValue="xyz@anc.com" />
            </div>
          </div>
          <div className="profile-main-field">
            <div className="profile-main-titles">
              <h3>Phone</h3>
            </div>
            <div className="profile-main-details">
              <input type="text" defaultValue="9393898989" maxLength={10} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

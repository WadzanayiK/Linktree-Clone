import React from "react";
import profile from "../images/profile.jpg";
import { ShareIconSvg, MobileShareIcon } from "../images/Icons";
import "./profileSection.scss";

export const ProfileSection = () => {
  return (
    <div className="profileContainer">
      <div className="profileItems">
        <img src={profile} alt="profile" id="profile__img" />
        <h3>Wadzanayi Kuweta</h3>
        <p id="slack">Split</p>
      </div>
      <div className="avatarShare">
        <ShareIconSvg />
      </div>

      <div className="mobileShareBtn">
        <MobileShareIcon />
      </div>
    </div>
  );
};
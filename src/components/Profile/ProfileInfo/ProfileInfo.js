import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://global-uploads.webflow.com/5ef5480befd392489dacf544/5f9f5e5943de7e69a1339242_5f44a7398c0cdf460857e744_img-image.jpeg" />
      </div>
      <div className={s.descriptionBlock}>ava + descriptions</div>
    </div>
  );
};

export default ProfileInfo;

import React from "react";
import Typical from "react-typical";

import { FaFacebook } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import './Profile.css'

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icons">
              <a
                href="https://web.facebook.com/adedayo.ogunsemoyin"
                className="icon"
              >
                <FaFacebook />
              </a>
              <a href="#" className="icon">
                <FaGooglePlusG />
              </a>
              <a href="#" className="icon">
                <FaInstagram />
              </a>
              <a href="#" className="icon">
                <FaYoutube />
              </a>
              <a href="#" className="icon">
                <FaFacebook />
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'm <span className="highlighted-text">Adedayo</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 😃",
                    1000,
                    "Frontend Developer 💻",
                    1000,
                    "JavaScript Dev ⚡",
                    1000,
                    "React Dev ⚛️",
                    1000,
                    "Cross Platform Dev 📱",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Transforming ideas into interactive digital experiences, one
                pixel at a time.
              </span>
            </span>
          </div>
          <div className="profile-option">
            <button className="btn primary-btn">Hire Me</button>
            <a href="adedayo-ogunsemoyin.pdf">
              {" "}
              <button className="btn highlighted-btn"> Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

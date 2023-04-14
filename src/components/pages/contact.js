import React from "react";
import contactImg from "../../../static/assets/images/auth/login.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function () {
  const linkedinUrl = "https://www.linkedin.com/in/atmakings";
  const openLinkedinProfile = () => {
    window.open(linkedinUrl, "_blank");
  };

  return (
    <div className="conent-page-wrapper">
      <div
        className="left-column"
        style={{
          backgroundImage: `url(${contactImg})`,
        }}
      />

      <div className="right-column">
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="user" />
            </div>
            <div className="text">Andrew Makings</div>
          </div>

          <div className="bullet-point-group email">
            <div className="icon">
              <FontAwesomeIcon icon="envelope" />
            </div>
            <a href="mailto:atmakings@gmail.com">
              <div className="text">atmakings@gmail.com</div>
            </a>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="phone" />
            </div>
            <div className="text">(785) 650-1644</div>
          </div>

          <div
            className="bullet-point-group linkedin"
            onClick={openLinkedinProfile}
          >
            <div className="icon">
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            </div>
            <div className="text">www.linkedin.com/in/atmakings</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="map-pin" />
            </div>
            <div className="text">Kensington, Kansas</div>
          </div>
        </div>
      </div>
    </div>
  );
}

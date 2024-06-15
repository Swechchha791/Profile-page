import React from "react";
import { Row } from "react-bootstrap";

function Profile() {
  return (
    <Row className="profile text-light">
      <Row className="text-center user-info">
        <h1>
          <strong>Anonymous</strong>
        </h1>
        <p>
          Senior System Engineer at Anonymous company <br />
        </p>
        {/* <p>
          lorem ipsum dolor sit amet, consectetur adip lorem lorem1 lore lorem
          ipsum dolor sit amet, consectetur adip lorem lorem1 lore lorem ipsum
          dolor sit amet, consectetur adip lorem lorem1 lore lorem ipsum dolor
          sit amet, consectetur adip lorem lorem1 lore
        </p> */}
      </Row>

      <Row className="text-center">
        <img
          src="/images/profile-pick.jpg"
          alt="Profile"
          className="profile-img"
        />
      </Row>
    </Row>
  );
}

export default Profile;

import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

class HeaderComponent extends Component {
  render() {
    return (
      <div className="header">
        <div className="content">facebook</div>
        <div className="profile">
          Meu perfil <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
        </div>
      </div>
    );
  }
}

export default HeaderComponent;

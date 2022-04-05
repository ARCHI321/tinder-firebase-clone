import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";

export default function Header({ backButton }) {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon fontSize="large" className="header_icon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon fontSize="large" className="header_icon" />
        </IconButton>
      )}

      <img
        src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png"
        alt=""
        className="
        header_logo"
      />
      <Link to="/chat">
        <IconButton>
          <ForumIcon fontSize="large" className="header_icon" />
        </IconButton>
      </Link>
    </div>
  );
}

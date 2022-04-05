import React from "react";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Chat.css";

export default function ({ name, message, profilePic, timestamp }) {
  return (
    <Link to={`/chat/${name}`}>
      <div className="chat">
        <Avatar className="chat_image" alt={name} src={profilePic} />
        <div className="chat_details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="chat-timestamp">{timestamp}</p>
      </div>
    </Link>
  );
}

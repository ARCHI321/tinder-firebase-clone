import { Avatar } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import './ChatScreen.css';

export default function ChatScreen() {
    const [input,setInput] = useState('');
    const [messages , setMessages] = useState([
        {
            name: "Ellen",
            image:' ...',
            message: "Hello there"
        },
        {
            name: "Mark",
            image:' ...',
            message: "Whats up"
        },
        {

            message: "Good",
        },

    ])

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages ,  { message:input}])
        setInput('');
    }
  return (
    <div className="chatScreen">
        <p className="chatScreen_timestamp">YOU MATCHED WITH ELLEN ON 10/08/22</p>
      {messages.map((message) => (
          message.name ? (
          <div className="chatScreen_message">
              <Avatar 
              className="chatScreen_image"
              alt={message.name}
              src={message.image}
              />
              <p className="chatScreen_text">{message.message}</p>
          </div>

          ) : (
            <div className="chatScreen_message">
            <p className="chatScreen_textUser">{message.message}</p>
        </div>

          )
      ))}

      <div>
          <form action="" className="chatScreen_input">
              <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="chatScreen_inputField"
              />
              <button type="submit" onClick = {handleSend} className="chatScreen_inputButton">SEND</button>
          </form>
      </div>
    </div>
  );
}

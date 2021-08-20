//message card
import React from 'react';

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  const messageStyle = {
    border: "2px solid teal",
    background: "none",
    marginBottom: "10px",
    padding: "10px",
    borderRadius: "5px",
    maxWidth: "700px"
  }

  return (
    isSentByCurrentUser
      ? (
        <div style={messageStyle}>
          <p style={{color: "white", fontSize:"18px"}}>{trimmedName}</p>
          <div>
            <p style={{color: "teal", fontSize:"24px"}}>{text}</p>
          </div>
        </div>
        )
        : (
          <div style={messageStyle}>
            <div>
              <p style={{color: "teal", fontSize:"24px"}}>{text}</p>
            </div>
            <p style={{color: "white", fontSize:"18px"}}>{user}</p>
          </div>
        )
  );
}

export default Message;

import React from 'react';

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div>
          <p>{trimmedName}</p>
          <div>
            <p>{text}</p>
          </div>
        </div>
        )
        : (
          <div>
            <div>
              <p>{text}</p>
            </div>
            <p>{user}</p>
          </div>
        )
  );
}

export default Message;

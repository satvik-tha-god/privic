//input for chatroom
import React from 'react';
import Styles from "./css/Input.module.css";

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className={Styles.inputStyle}
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className={Styles.buttonStyle} onClick={e => sendMessage(e)}>Send</button>
  </form>
)

export default Input;

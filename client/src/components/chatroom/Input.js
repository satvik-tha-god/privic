import React from 'react';
const inputStyle = {
  color: "teal",
  background: "none",
  border: "1px solid teal",
  borderRadius: "5px",
  width: "650px",
  fontSize: "18px",
  padding: "5px",
  position: "absolute",
  bottom: "10px"
}
const buttonStyle = {
  color: "teal",
  background: "none",
  border: "1px solid teal",
  borderRadius: "2px",
  fontSize: "18px",
  padding: "5px",
  position: "absolute",
  bottom: "10px",
  left: "1050px"
}
const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      style={inputStyle}
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button style={buttonStyle} onClick={e => sendMessage(e)}>Send</button>
  </form>
)

export default Input;

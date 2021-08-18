import React, { useState } from 'react';
import { Link } from "react-router-dom";
import pinstring from "./pin.js"
import "./css/pages.css";

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const chatButtonCreate = {
    color: "teal",
    background: "none",
    border: "1px solid teal",
    marginBottom: "20px",
    borderRadius: "3px",
    fontSize: "18px",
    padding: "10px 15px"
  }
  const inputStyle={
    background: "none",
    border: "1px solid teal",
    color: "teal",
    fontSize: "18px",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "20px"

  }

  return (
    <div>
      <div>
        <center>
        <h1 className="text">Join</h1>
        <div>
          <input style={inputStyle} placeholder="Name" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input style={inputStyle} placeholder="Room" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/join/chat?name=${name}&room=${room}`}>
          <button type="submit" style={chatButtonCreate}>Sign In</button>
        </Link>
        </center>
      </div>
    </div>
  );
}

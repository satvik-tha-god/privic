//create chatroom
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import pinstring from "./pin.js"

export default function Create() {
  const [name, setName] = useState('');
  const room = pinstring;

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
        <h1>Create</h1>
        <div>
          <input style={inputStyle} placeholder="Name" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input style={inputStyle} placeholder="Room" type="text" value={room} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/join/chat?name=${name}&room=${room}`}>
          <button style={chatButtonCreate} type="submit">Create</button>
        </Link>
        </center>
      </div>
    </div>
  );
}

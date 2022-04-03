//create chatroom
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import pinstring from "./functions/pin.js"
import { inputStyle, chatButtonCreate, createTitle } from './css-js/Create.module.css.js';

export default function Create() {
  const [name, setName] = useState('');
  const room = pinstring;

  return (
    <div>
      <div>
        <center>
        <h1 style={createTitle}>Create</h1>
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

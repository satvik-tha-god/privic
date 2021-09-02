//create chatroom
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import pinstring from "./functions/pin.js"
import Styles from './css/Create.module.css';

export default function Create() {
  const [name, setName] = useState('');
  const room = pinstring;

  return (
    <div>
      <div>
        <center>
        <h1 style={{color: "white"}}>Create</h1>
        <div>
          <input className={Styles.inputStyle} placeholder="Name" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input className={Styles.inputStyle} placeholder="Room" type="text" value={room} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/join/chat?name=${name}&room=${room}`}>
          <button className={Styles.chatButtonCreate} type="submit">Create</button>
        </Link>
        </center>
      </div>
    </div>
  );
}

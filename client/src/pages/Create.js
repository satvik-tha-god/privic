import React, { useState } from 'react';
import { Link } from "react-router-dom";
import pinstring from "./pin.js"

export default function Create() {
  const [name, setName] = useState('');
  const room = pinstring;

  return (
    <div>
      <div>
        <h1>Create</h1>
        <div>
          <input placeholder="Name" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" type="text" value={room} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/join/chat?name=${name}&room=${room}`}>
          <button type="submit">Create</button>
        </Link>
      </div>
    </div>
  );
}

//join chatroom
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { chatButtonCreate, inputStyle, title } from "./css-js/Join.module.css";

export default function SignIn() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div>
      <div>
        <center>
          <h1 className='text' style={title}>
            Join
          </h1>
          <div>
            <input
              style={inputStyle}
              placeholder='Name'
              type='text'
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <input
              style={inputStyle}
              placeholder='Room'
              type='text'
              onChange={(event) => setRoom(event.target.value)}
            />
          </div>
          <Link
            onClick={(e) => (!name || !room ? e.preventDefault() : null)}
            to={`/join/chat?name=${name}&room=${room}`}>
            <button type='submit' style={chatButtonCreate}>
              Sign In
            </button>
          </Link>
        </center>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from 'react-router-dom';

function Create() {
  const pinarr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","10"];
  const rand1 = pinarr[Math.floor(Math.random() * pinarr.length)];
  const rand2 = pinarr[Math.floor(Math.random() * pinarr.length)];
  const rand3 = pinarr[Math.floor(Math.random() * pinarr.length)];
  const rand4 = pinarr[Math.floor(Math.random() * pinarr.length)];
  const rand5 = pinarr[Math.floor(Math.random() * pinarr.length)];
  const rand6 = pinarr[Math.floor(Math.random() * pinarr.length)];
  const pin = rand1 + rand2 + rand3 + rand4 + rand5 + rand6;
  return (
    <div>
      <center>
        <form style={{ maxWidth: 200 }} action="/Chat">
          <h3 for="name">Create room</h3>
          <label>
            {" "}
            Your Username
            <br></br>
            <input
              type="text"
              name="name"
              placeholder="Username"
              autoComplete="off"
              maxLength="16"
            />
          </label>
          <br></br>
          <label>
            Your room pin (copy and send this to your friends):
            <br></br>
            <input
              type="text"
              id="roompin"
              name="room"
              placeholder="Room pin"
              autoComplete="off"
              maxLength="8"
              value={pin}
              readOnly
            />
          </label>
          <br></br>
          <p style={{ maxWidth: 200 }}>
            By joining you agree with our terms of service and community
            guidelines
          </p>

          <Link to={`/chat/chatpage/${pin}`}>Create</Link>
        </form>
      </center>
    </div>
  );
}

export default Create;

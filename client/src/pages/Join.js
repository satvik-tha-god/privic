import React from "react";
import { Link } from 'react-router-dom';

function Join() {
  return (
    <div>
      <center>
        <form style={{ maxWidth: 200 }} action="/Chat">
          <h3 for="name">Join room</h3>
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
            Your room pin:
            <br></br>
            <input
              type="text"
              id="roompin"
              name="room"
              placeholder="Room pin"
              autoComplete="off"
              maxLength="8"
            />
          </label>
          <br></br>
          <p style={{ maxWidth: 200 }}>
            By joining you agree with our terms of service and community
            guidelines
          </p>

          <Link>Join</Link>
        </form>
      </center>
    </div>
  );
}

export default Join;

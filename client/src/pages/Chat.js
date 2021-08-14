import React from "react";
import { Link } from "react-router-dom";
function MainChat() {
  return (
    <div>
      <center>
        <form>
          <h1>Welcome to chatroom:</h1>
          <Link to="/chat/create">Create your own chatroom</Link>
          <br></br>
          <Link to="/chat/join">Join existing</Link>
          <p style={{ maxWidth: 200 }}>
            By joining you agree with our terms of service and community
            guidelines
          </p>
        </form>
      </center>
    </div>
  );
}

export default MainChat;

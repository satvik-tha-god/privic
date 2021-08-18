import React from "react";
import { Link } from "react-router-dom";
function MainChat() {

  const chatButtonCreate = {
    color: "teal",
    background: "none",
    border: "1px solid teal",
    marginBottom: "20px",
    borderRadius: "3px",
    fontSize: "18px",
    padding: "10px 15px"
  }

  const chatButtonJoin = {
    color: "teal",
    background: "none",
    border: "1px solid teal",
    marginBottom: "20px",
    borderRadius: "3px",
    fontSize: "18px",
    padding: "10px 70px"
  }


  return (
    <div>
      <center>
        <img src="/images/logo.png" alt="logo" style={{height:"200px"}}/>
        <form>
          <h1>Welcome to chatroom:</h1>
          <Link to="/create"><button style={chatButtonCreate}>Create your own chatroom</button></Link>
          <br></br>
          <Link to="/join"><button style={chatButtonJoin}>
            Join Existing
          </button></Link>
        </form>
      </center>
    </div>
  );
}

export default MainChat;

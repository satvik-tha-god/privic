//for the chat menu
import React from "react";
import { Link } from "react-router-dom";
import { chatButtonCreate, chatButtonJoin, Logo } from './css-js/MainChat.module.css'

function MainChat() {

  return (
    <div>
      <center>
        <img src="/images/logo.png" alt="logo" style={Logo}/>
        <form>
          <h1 style={{color: "white"}}>Welcome to chatroom:</h1>
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

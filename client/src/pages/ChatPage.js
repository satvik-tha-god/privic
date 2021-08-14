import React from "react";

function ChatPage(){
  return <div><center>
    <div>
      <div class="chat__main">
        <ol id="messages" class="chat__messages"></ol>
        <div class="chat__footer">
          <form id="message-form">
            <input
              name="message"
              id="text"
              type="text"
              placeholder="Message"
              autofocus
              autocomplete="off"
              maxlength="199"
            />
            <button>Send</button>
          </form>
        </div>
      </div>

      <div class="chat__sidebar">
        <h3>Room pin:</h3>
        <div id="roomid"></div>
        <h3>Online Users:</h3>
        <div id="users"></div>
      </div>
    </div>
  </center></div>
}

export default ChatPage;

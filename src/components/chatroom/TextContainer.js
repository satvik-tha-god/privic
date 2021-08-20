//container for chatrrom info
import React from 'react';

const containerStyle={
  position: "absolute",
  top: "100px",
  left: "1170px"

}
const TextContainer = ({ users, room }) => (
  <div style={containerStyle}>
    {
      users
        ? (
          <div>
            <h1>Room id: </h1>
            <h2 style={{color: "teal"}}>{room}</h2>
            <h1>People currently chatting:</h1>
            <div>
              <h2 style={{color: "teal"}}>
                {users.map(({name}) => (
                  <div key={name}>
                    {name}
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;

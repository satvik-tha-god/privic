import React from 'react';


const TextContainer = ({ users, room }) => (
  <div>
    <div>
      <h1>Realtime Chat Application</h1>
    </div>
    {
      users
        ? (
          <div>
            <h1>Room id: </h1>
            <h2>{room}</h2>
            <h1>People currently chatting:</h1>
            <div>
              <h2>
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

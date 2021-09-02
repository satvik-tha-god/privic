//container for chatrrom info
import React from 'react';
import Styles from './css/TextContainer.module.css';

const TextContainer = ({ users, room }) => (
  <div className={Styles.containerStyle}>
    {
      users
        ? (
          <div>
            <h1>Room id: </h1>
            <h2 className={Styles.Color}>{room}</h2>
            <h1>People currently chatting:</h1>
            <div>
              <h2 className={Styles.Color}>
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

import React, { useContext, useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import "./components.css";
import { AuthContext } from '../context/auth';

function MenuBar() {
  const { user, logout } = useContext(AuthContext);
  const pathname = window.location.pathname;

  const path = pathname === '/' ? 'home' : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const menuBar = user ? (
    <Menu pointing secondary size="massive" color="teal" className="Menu" >
      <Menu.Item style={{color: "white"}} name={user.username} active as={Link} to="/" />
      <Menu.Item
      style={{color: "white"}}
      name="chatroom"
      active={activeItem === 'chatroom'}
      onClick={handleItemClick}
      as={Link}
      to="/main-chat"
      />

      <Menu.Menu position="right">
        <Menu.Item style={{color: "white"}}  name="logout" onClick={logout} as={Link} to="/"/>
      </Menu.Menu>
    </Menu>
  ) : (
    <Menu pointing secondary size="massive" color="teal">
      <Menu.Item
        name="home"
        style={{color: "white"}}
        active={activeItem === 'home'}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />


      <Menu.Menu position="right">
        <Menu.Item
          name="login"
          style={{color: "white"}}
          active={activeItem === 'login'}
          onClick={handleItemClick}
          as={Link}
          to="/login"
        />
        <Menu.Item
          name="register"
          style={{color: "white"}}
          active={activeItem === 'register'}
          onClick={handleItemClick}
          as={Link}
          to="/register"
        />
      </Menu.Menu>
    </Menu>
  );

  return <div >{menuBar}</div>;
}

export default MenuBar;

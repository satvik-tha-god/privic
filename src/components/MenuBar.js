//menubar for user navigation
import React, { useContext, useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth";
// eslint-disable-next-line
import { menuColor } from "./css-js/MenuBar.module.css";

function MenuBar() {
  const { user, logout } = useContext(AuthContext);
  const pathname = window.location.pathname;

  const path = pathname === "/" ? "home" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const menuBar = user ? (
    <Menu pointing secondary size='massive' color='teal' className='Menu'>
      <Menu.Item
        style={menuColor}
        name={user.username}
        active
        as={Link}
        to='/'
      />
      <Menu.Item
        style={menuColor}
        name='chatroom'
        active={activeItem === "chatroom"}
        onClick={handleItemClick}
        as={Link}
        to='/main-chat'
      />

      <Menu.Menu position='right'>
        <Menu.Item
          style={menuColor}
          name='logout'
          onClick={logout}
          as={Link}
          to='/'
        />
      </Menu.Menu>
    </Menu>
  ) : (
    <Menu pointing secondary size='massive' color='teal'>
      <Menu.Item
        name='home'
        style={menuColor}
        active={activeItem === "home"}
        onClick={handleItemClick}
        as={Link}
        to='/'
      />

      <Menu.Menu position='right'>
        <Menu.Item
          name='login'
          style={menuColor}
          active={activeItem === "login"}
          onClick={handleItemClick}
          as={Link}
          to='/login'
        />
        <Menu.Item
          name='register'
          style={menuColor}
          active={activeItem === "register"}
          onClick={handleItemClick}
          as={Link}
          to='/register'
        />
      </Menu.Menu>
    </Menu>
  );

  return <div>{menuBar}</div>;
}

export default MenuBar;

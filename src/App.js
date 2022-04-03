import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

import { AuthProvider } from "./context/auth";
import AuthRoute from "./util/AuthRoute";

import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SinglePost from "./pages/SinglePost";
import Chat from "./pages/Chat";
import Join from "./pages/Join";
import Create from "./pages/Create";
import MainChat from "./pages/MainChat";

// Testing
function App() {
  //App router
  return (
    <AuthProvider>
      <Router>
        <Container>
          <img src='/images/logo.png' alt='logo' className='logo-style' />
          <MenuBar />
          <Route exact path='/' component={Home} />
          <AuthRoute exact path='/login' component={Login} />
          <AuthRoute exact path='/register' component={Register} />
          <Route exact path='/posts/:postId' component={SinglePost} />
          <Route exact path='/main-chat' component={MainChat} />
          <Route exact path='/create' component={Create} />
          <Route exact path='/join' component={Join} />
          <Route exact path='/join/chat' component={Chat} />
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import { AuthProvider } from './context/auth';
import AuthRoute from './util/AuthRoute';

import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SinglePost from './pages/SinglePost';
import Chat from './pages/Chat';
import Create from './pages/Create';
import Join from './pages/Join';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <MenuBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/chat" component={Chat}/>
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
          <AuthRoute exact path="/posts/:postId" component={SinglePost} />
          <Route exact path="/chat/create" component={Create} />
          <Route exact path="/chat/join" component={Join} />
          <Route exact path="/chat/chatpage/:chatID" component={ChatPage} />
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;

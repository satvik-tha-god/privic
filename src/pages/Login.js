//login page
import React, { useContext, useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { AuthContext } from '../context/auth';
import { useForm } from '../util/hooks';
import Styles from './css/Login.module.css';

function Login(props) {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    username: '',
    password: ''
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(
      _,
      {
        data: { login: userData }
      }
    ) {
      context.login(userData);
      props.history.push('/');
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values
  });

  function loginUserCallback() {
    loginUser();
  }
  const inputStyle = {
    background: "none",
    border: "1px solid teal",
    color: "teal",
    marginBottom: "10px"
  }
  const labelStyle = {
    fontSize: "18px",
    marginRight: "230px",
    color: "white"
  }
  return (
    <center>
    <img src="/images/logo.png" alt="logo" className={Styles.Logo} />
    <div className={"form-container "+ Styles.FormContainer}>
      <Form onSubmit={onSubmit} noValidate className={loading ? 'loading' : ''}>

        <p className={Styles.WelcomeBack}>Welcome back, <span style={{color: "teal"}}>{values.username}</span> </p>
        <p style={labelStyle}> Enter your username: </p>
        <input
          style={inputStyle}
          label="Username"
          placeholder="Username.."
          name="username"
          type="text"
          autoComplete="none"
          value={values.username}
          error={errors.username ? true : false}
          onChange={onChange}
          className= {Styles.inputStyle}
        />
        <p style={labelStyle}> Enter your password: </p>
        <input
          style={inputStyle}
          label="Password"
          placeholder="Password.."
          name="password"
          type="password"
          autoComplete="new-password"
          value={values.password}
          error={errors.password ? true : false}
          onChange={onChange}
        />
        <Button type="submit" color="teal" basic>
          Login
        </Button>
      </Form>
      {Object.keys(errors).length > 0 && (
        <div className="ui error message">
          <ul className="list">
            {Object.values(errors).map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </center>
  );
}

const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      username
      createdAt
      token
    }
  }
`;

export default Login;

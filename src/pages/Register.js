//register page
import React, { useContext, useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { AuthContext } from '../context/auth';
import { useForm } from '../util/hooks';
import nameList from './functions/username';
import Styles from './css/Register.module.css';
import { labelStyle, inputStyle, enterUsername, securePassword } from './css-js/Register.module.css'

function Register(props) {


  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const { onChange, onSubmit, values } = useForm(registerUser, {
    username: '',
    password: '',
    confirmPassword: ''
  });

  function generateUser() {
      values.username = nameList[Math.floor(Math.random() * nameList.length)];
      values.username += nameList[Math.floor(Math.random() * nameList.length)];
      if (Math.random() > 0.5) {
        values.username += nameList[Math.floor(Math.random() * nameList.length)];
      }
    }

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(
      _,
      {
        data: { register: userData }
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

  function registerUser() {
    addUser();
  }

  return (
    <center>
    <img src="/images/logo.png" alt="logo" className={Styles.Logo}/>
    <div className="form-container">
      <Form onSubmit={onSubmit} noValidate className={loading ? 'loading' : ''}>
        <p className={Styles.Welcome}>Welcome  <span style={{color:"teal"}}>{values.username}</span></p>
        <p style={enterUsername}>Enter an anonymous username:</p>
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
        />
        <label style={labelStyle}>Or</label>
        <br/>
        <Button type="submit" color="teal" basic onClick={generateUser}>
          Generate
        </Button>
        <br />
        <p style={securePassword}>Enter a secure password:</p>
        <input
          style={inputStyle}
          label="Password"
          placeholder="Password.."
          name="password"
          type="password"
          autoComplete="none"
          value={values.password}
          error={errors.password ? true : false}
          onChange={onChange}
        />
        <p style={securePassword}>Confirm password:</p>
        <input
          style={inputStyle}
          label="Confirm Password"
          placeholder="Confirm Password.."
          name="confirmPassword"
          type="password"
          value={values.confirmPassword}
          error={errors.confirmPassword ? true : false}
          onChange={onChange}
        />
        <Button type="submit" color="teal" basic>
          Register
        </Button>
      </Form>
      {Object.keys(errors).length > 0 && (
        <div className="ui error message" style={{background: "none"}}>
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

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      username
      createdAt
      token
    }
  }
`;

export default Register;

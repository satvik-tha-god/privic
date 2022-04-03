//for users to post
import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useForm } from '../util/hooks';
import { FETCH_POSTS_QUERY } from '../util/graphql';
import { errorMessage, textArea, form, onYourMind } from './css-js/PostForm.module.css';

function PostForm() {
  const { values, onChange, onSubmit } = useForm(createPostCallback, {
    body: ''
  });

  const [createPost, { error }] = useMutation(CREATE_POST_MUTATION, {
    variables: values,
    update(proxy, result) {
      const data = proxy.readQuery({
        query: FETCH_POSTS_QUERY
      });
      data.getPosts = [result.data.createPost, ...data.getPosts];
      proxy.writeQuery({ query: FETCH_POSTS_QUERY, data });
      values.body = '';
    }
  });

  function createPostCallback() {
    createPost();
  }

  return (
    <>
      <center>
      <Form onSubmit={onSubmit} style={form}>
        <p style={onYourMind}>What's on your mind today?</p>
        <Form.Field>
          <textarea
            rows="5"
            cols="90"
            style={textArea}
            center
            placeholder="Post something"
            name="body"
            onChange={onChange}
            value={values.body}
            error={error ? true : false}
          />
          <Button type="submit" color="teal" basic>
            Submit
          </Button>
        </Form.Field>

      </Form>

      {error && (
        <div className="ui error message" style={errorMessage}>
          <ul className="list">
            <li>{error.graphQLErrors[0].message}</li>
          </ul>
        </div>
      )}
      </center>
    </>

  );
}

const CREATE_POST_MUTATION = gql`
  mutation createPost($body: String!) {
    createPost(body: $body) {
      id
      body
      createdAt
      username
      likes {
        id
        username
        createdAt
      }
      likeCount
      comments {
        id
        body
        username
        createdAt
      }
      commentCount
    }
  }
`;

export default PostForm;

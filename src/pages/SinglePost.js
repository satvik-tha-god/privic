//single post page
import React, { useContext, useState, useRef } from "react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import moment from "moment";
import {
  Button,
  Card,
  Form,
  Grid,
  Image,
  Icon,
  Label,
} from "semantic-ui-react";

import { AuthContext } from "../context/auth";
import LikeButton from "../components/LikeButton";
import DeleteButton from "../components/DeleteButton";
import MyPopup from "../util/MyPopup";
import {
  inputStyle,
  postComment,
  CardContent1,
  CardContent2,
  CardHeader1,
  CardMeta1,
  CardDescription1,
  Button1,
  commentStyle,
} from "./css-js/SinglePost.module.css";
import { loadingStyle } from "./css-js/Home.module.css";

function SinglePost(props) {
  const postId = props.match.params.postId;
  const { user } = useContext(AuthContext);
  const commentInputRef = useRef(null);

  const [comment, setComment] = useState("");

  const {
    data: { getPost },
  } = useQuery(FETCH_POST_QUERY, {
    variables: {
      postId,
    },
  });

  const [submitComment] = useMutation(SUBMIT_COMMENT_MUTATION, {
    update() {
      setComment("");
      commentInputRef.current.blur();
    },
    variables: {
      postId,
      body: comment,
    },
  });

  function deletePostCallback() {
    props.history.push("/");
  }

  let postMarkup;
  if (!getPost) {
    postMarkup = <p style={loadingStyle}>Loading post..</p>;
  } else {
    const {
      id,
      body,
      createdAt,
      username,
      comments,
      likes,
      likeCount,
      commentCount,
    } = getPost;

    postMarkup = (
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
            <Image
              src={`https://avatars.dicebear.com/api/micah/${username}.svg`}
              size='medium'
              float='right'
            />
          </Grid.Column>
          <Grid.Column width={10}>
            <div fluid style={CardContent1}>
              <Card.Content>
                <Card.Header style={CardHeader1}>{username}</Card.Header>
                <Card.Meta style={CardMeta1}>
                  {moment(createdAt).fromNow()}
                </Card.Meta>
                <Card.Description style={CardDescription1}>
                  {body}
                </Card.Description>
              </Card.Content>
              <hr />
              <Card.Content extra>
                <LikeButton user={user} post={{ id, likeCount, likes }} />
                <MyPopup content='Comment on post'>
                  <Button
                    as='div'
                    labelPosition='right'
                    onClick={() => console.log("Comment on post")}>
                    <Button color='teal' basic>
                      <Icon name='comments' />
                    </Button>
                    <Label color='teal' pointing='left'>
                      {commentCount}
                    </Label>
                  </Button>
                </MyPopup>
                {user && user.username === username && (
                  <DeleteButton postId={id} callback={deletePostCallback} />
                )}
              </Card.Content>
            </div>
            {user && (
              <div fluid style={CardContent2}>
                <Card.Content>
                  <p style={postComment}>Post a comment</p>
                  <Form>
                    <div className='ui action input fluid'>
                      <input
                        style={inputStyle}
                        type='text'
                        placeholder='Comment..'
                        name='comment'
                        value={comment}
                        onChange={(event) => setComment(event.target.value)}
                        ref={commentInputRef}
                      />
                      <Button
                        type='submit'
                        basic
                        className='ui button teal '
                        style={Button1}
                        disabled={comment.trim() === ""}
                        onClick={submitComment}>
                        Submit
                      </Button>
                    </div>
                  </Form>
                </Card.Content>
              </div>
            )}
            {comments.map((comment) => (
              <div style={commentStyle} fluid key={comment.id}>
                <Card.Content>
                  {user && user.username === comment.username && (
                    <DeleteButton postId={id} commentId={comment.id} />
                  )}
                  <Card.Header style={CardHeader1}>
                    {comment.username}
                  </Card.Header>
                  <Card.Meta style={CardMeta1}>
                    {moment(comment.createdAt).fromNow()}
                  </Card.Meta>
                  <Card.Description style={CardDescription1}>
                    {comment.body}
                  </Card.Description>
                </Card.Content>
              </div>
            ))}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
  return postMarkup;
}

const SUBMIT_COMMENT_MUTATION = gql`
  mutation ($postId: String!, $body: String!) {
    createComment(postId: $postId, body: $body) {
      id
      comments {
        id
        body
        createdAt
        username
      }
      commentCount
    }
  }
`;

const FETCH_POST_QUERY = gql`
  query ($postId: ID!) {
    getPost(postId: $postId) {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;

export default SinglePost;

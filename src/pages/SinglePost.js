import React, { useContext, useState, useRef } from 'react';
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import moment from 'moment';
import {
  Button,
  Card,
  Form,
  Grid,
  Image,
  Icon,
  Label
} from 'semantic-ui-react';

import { AuthContext } from '../context/auth';
import LikeButton from '../components/LikeButton';
import DeleteButton from '../components/DeleteButton';
import MyPopup from '../util/MyPopup';

function SinglePost(props) {
  const postId = props.match.params.postId;
  const { user } = useContext(AuthContext);
  const commentInputRef = useRef(null);

  const [comment, setComment] = useState('');

  const {
    data: { getPost }
  } = useQuery(FETCH_POST_QUERY, {
    variables: {
      postId
    }
  });

  const [submitComment] = useMutation(SUBMIT_COMMENT_MUTATION, {
    update() {
      setComment('');
      commentInputRef.current.blur();
    },
    variables: {
      postId,
      body: comment
    }
  });

  function deletePostCallback() {
    props.history.push('/');
  }

  let postMarkup;
  if (!getPost) {
    postMarkup = <p>Loading post..</p>;
  } else {
    const {
      id,
      body,
      createdAt,
      username,
      comments,
      likes,
      likeCount,
      commentCount
    } = getPost;

    const inputStyle = {
      background: "none",
      border: "1px solid teal",
      color: "teal"
    }

    postMarkup = (
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
            <Image
              src="/images/anonymous-avatar.png"
              size="small"
              float="right"
            />
          </Grid.Column>
          <Grid.Column width={10}>
            <div fluid style={{background: "none", border: "2px solid teal", padding: "10px", borderRadius: "5px"}}>
              <Card.Content>
                <Card.Header style={{color:"teal"}}>{username}</Card.Header>
                <Card.Meta style={{color:"#727474"}}>{moment(createdAt).fromNow()}</Card.Meta>
                <Card.Description style={{color:"white"}}>{body}</Card.Description>
              </Card.Content>
              <hr />
              <Card.Content extra>
                <LikeButton user={user} post={{ id, likeCount, likes }} />
                <MyPopup content="Comment on post">
                  <Button
                    as="div"
                    labelPosition="right"
                    onClick={() => console.log('Comment on post')}
                  >
                    <Button color="teal" basic>
                      <Icon name="comments" />
                    </Button>
                    <Label color="teal" pointing="left">
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
              <div fluid style={{background: "none", border: "2px solid teal", padding: "10px", borderRadius: "5px", marginTop:"20px"}}>
                <Card.Content>
                  <p>Post a comment</p>
                  <Form>
                    <div className="ui action input fluid">
                      <input
                      style={inputStyle}
                        type="text"
                        placeholder="Comment.."
                        name="comment"
                        value={comment}
                        onChange={(event) => setComment(event.target.value)}
                        ref={commentInputRef}
                      />
                      <Button
                        type="submit"
                        basic
                        style={{background: "none"}}
                        className="ui button teal"
                        disabled={comment.trim() === ''}
                        onClick={submitComment}
                      >
                        Submit
                      </Button>
                    </div>
                  </Form>
                </Card.Content>
              </div>
            )}
            {comments.map((comment) => (
              <div fluid key={comment.id} style={{background: "none", border: "2px solid teal", padding: "10px", borderRadius: "5px", marginTop:"20px"}}>
                <Card.Content>
                  {user && user.username === comment.username && (
                    <DeleteButton postId={id} commentId={comment.id} />
                  )}
                  <Card.Header style={{color:"teal"}}>{comment.username}</Card.Header>
                  <Card.Meta style={{color:"#727474"}}>{moment(comment.createdAt).fromNow()}</Card.Meta>
                  <Card.Description style={{color:"white"}}>{comment.body}</Card.Description>
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
  mutation($postId: String!, $body: String!) {
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
  query($postId: ID!) {
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

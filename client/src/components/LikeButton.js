import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
// import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { Button, Label, Icon } from 'semantic-ui-react';

import MyPopup from '../util/MyPopup';

function LikeButton({ user, post: { id, likeCount, likes } }) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (user && likes.find((like) => like.username === user.username)) {
      setLiked(true);
    } else setLiked(false);
  }, [user, likes]);

  const [likePost] = useMutation(LIKE_POST_MUTATION, {
    variables: { postId: id }
  });

  const likeButton = user ? (
    liked ? (
      <Button color="teal">
        <Icon name="heart" />
      </Button>
    ) : (
      <Button color="teal" basic>
        <Icon name="heart" />
      </Button>
    )
  ) : (
    <Button as={Link} to="/login" color="teal" basic>
      <Icon name="heart" />
    </Button>
  );

  return ( user? (<Button as="div" labelPosition="right" onClick={likePost}>
    <MyPopup content={liked ? 'Unlike' : 'Like'}>{likeButton}</MyPopup>
    <Label color="teal" pointing="left" style={{background:"none"}}>
      {likeCount}
    </Label>
  </Button>) : (<Button labelPosition='right' as='a' href='/login'>
      <MyPopup content={liked? 'unlike post': 'like post'}>
      {likeButton}
      </MyPopup>
      <Label color="teal" pointing="left" style={{background:"none"}}>
        {likeCount}
      </Label>
  </Button>)

  );


}

const LIKE_POST_MUTATION = gql`
  mutation likePost($postId: ID!) {
    likePost(postId: $postId) {
      id
      likes {
        id
        username
      }
      likeCount
    }
  }
`;

export default LikeButton;

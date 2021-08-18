import React, { useContext } from 'react';
import { Button, Card, Icon, Label, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { AuthContext } from '../context/auth';
import LikeButton from './LikeButton';
import DeleteButton from './DeleteButton';
import MyPopup from '../util/MyPopup';
import "./components.css";

function PostCard({
  post: { body, createdAt, id, username, likeCount, commentCount, likes }
}) {
  const { user } = useContext(AuthContext);

  return (
    <div fluid color="teal"  style={{background: "none", border: "2px solid teal", padding: "10px", borderRadius: "5px"}}>
      <Card.Content>
        <Image
          floated="left"
          size="mini"
          src="/images/anonymous-avatar.png"
        />

        <Card.Header style={{color: "white", fontSize: "25px", marginBottom:"3px"}}>{username}</Card.Header>
        <Card.Meta style={{color: "#727474", fontSize:"16px"}} as={Link} to={`/posts/${id}`}>
          {moment(createdAt).fromNow(true)}
        </Card.Meta>
        <Card.Description style={{color: "teal", padding:"5px", fontSize:"18px"}}>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <LikeButton user={user} post={{ id, likes, likeCount }}/>
        <MyPopup content="Comment on post">
          <Button labelPosition="right" as={Link} to={`/posts/${id}`}>
            <Button color="teal" basic>
              <Icon name="comments" />
            </Button>
            <Label color="teal" pointing="left">
              {commentCount}
            </Label>
          </Button>
        </MyPopup>
        {user && user.username === username && <DeleteButton postId={id} />}
      </Card.Content>
    </div>
  );
}

export default PostCard;

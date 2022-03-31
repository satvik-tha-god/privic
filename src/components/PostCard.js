//display posts on homepage
import React, { useContext } from 'react';
import { Button, Card, Icon, Label, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { AuthContext } from '../context/auth';
import LikeButton from './LikeButton';
import DeleteButton from './DeleteButton';
import MyPopup from '../util/MyPopup';
import Styles from './css/PostCard.module.css';

function PostCard({
  post: { body, createdAt, id, username, likeCount, commentCount, likes }
}) {
  const { user } = useContext(AuthContext);

  return (
    <div fluid color="teal" className={Styles.CardContent1}>
      <Card.Content>
        <Image
          floated="left"
          size="mini"
          src={`https://avatars.dicebear.com/api/micah/${username}.svg`}
        />

        <Card.Header className={Styles.CardHeader1}>{username}</Card.Header>
        <Card.Meta className={Styles.CardMeta1} as={Link} to={`/posts/${id}`}>
          {moment(createdAt).fromNow(true)}
        </Card.Meta>
        <Card.Description className={Styles.CardDescription1}>{body}</Card.Description>
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

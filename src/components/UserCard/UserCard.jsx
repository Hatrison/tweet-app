import Button from 'components/FollowButton/FollowButton';
import {
  Avatar,
  Container,
  Followers,
  Logo,
  MainPicture,
  Rect,
  Tweets,
} from './UserCard.styled';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectFollowing } from 'redux/following/selectors';
import { addFollowing, deleteFollowing } from 'redux/following/followingSlice';
const mainPicture = require('../../assets/main-picture.png');
const logo = require('../../assets/logo.png');

function numberWithCommas(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
}

const UserCard = ({ tweet }) => {
  const dispatch = useDispatch();
  const following = useSelector(selectFollowing);
  const isFollowing = following.includes(tweet.id);

  const addToFollowing = () => dispatch(addFollowing(tweet.id));
  const deleteFromFollowing = () => dispatch(deleteFollowing(tweet.id));

  const followers = isFollowing ? tweet.followers + 1 : tweet.followers;

  return (
    <Container>
      <Logo src={logo} alt="GoIT logo" />
      <MainPicture src={mainPicture} alt="messages" />
      <Rect />
      <Avatar url={tweet.avatar} />
      <Tweets>{tweet.tweets} tweets</Tweets>
      <Followers>
        {numberWithCommas(followers)}
        &nbsp;followers
      </Followers>
      <Button
        isFollowing={isFollowing}
        onClick={isFollowing ? deleteFromFollowing : addToFollowing}
      />
    </Container>
  );
};

UserCard.propTypes = {
  tweet: PropTypes.shape({
    id: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }).isRequired,
};

export default UserCard;

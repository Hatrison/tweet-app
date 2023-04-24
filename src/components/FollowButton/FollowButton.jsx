import PropTypes from 'prop-types';
import { Button } from './FollowButton.styled';

const FollowButton = ({ isFollowing, onClick }) => {
  return (
    <Button isFollowing={isFollowing} onClick={onClick}>
      {isFollowing ? 'following' : 'follow'}
    </Button>
  );
};

FollowButton.propTypes = {
  isFollowing: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FollowButton;

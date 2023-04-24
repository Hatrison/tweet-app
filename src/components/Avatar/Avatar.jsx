import PropTypes from 'prop-types';
import { AvatarImg, AvatarThumb } from './Avatar.styled';

const Avatar = ({ url, className = '' }) => {
  return (
    <AvatarThumb className={className}>
      <AvatarImg src={url} alt="avatar" />
    </AvatarThumb>
  );
};

Avatar.propTypes = {
  url: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Avatar;

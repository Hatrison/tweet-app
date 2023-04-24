import AvatarComponent from 'components/Avatar/Avatar';
import styled from 'styled-components';

export const Container = styled.div`
  width: 380px;
  height: 460px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  position: relative;
  padding-top: 28px;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: auto;
`;

export const MainPicture = styled.img`
  width: 308px;
  height: auto;
`;

export const Avatar = styled(AvatarComponent)`
  position: absolute;
  top: 178px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Rect = styled.div`
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  margin: 18px 0 62px 0;
  width: 100%;
  height: 8px;
`;

const Text = styled.p`
  text-transform: uppercase;
`;

export const Tweets = styled(Text)`
  margin-bottom: 16px;
`;

export const Followers = styled(Text)`
  margin-bottom: 26px;
`;

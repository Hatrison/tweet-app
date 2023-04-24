import BackLink from 'components/BackLink/BackLink';
import { Container } from './Tweets.styled';

const Tweets = () => {
  return (
    <Container>
      <BackLink to="/">Back to Home</BackLink>
      Tweets
    </Container>
  );
};

export default Tweets;

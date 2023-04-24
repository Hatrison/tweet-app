import BackLink from 'components/BackLink/BackLink';
import { Container, InnerContainer } from './Tweets.styled';
import { useSelector } from 'react-redux';
import { selectTweets } from 'redux/tweets/selectors';
import UserCard from 'components/UserCard/UserCard';

const Tweets = () => {
  const tweets = useSelector(selectTweets);

  return (
    <Container>
      <BackLink to="/">Back to Home</BackLink>
      <InnerContainer>
        {tweets.map(tweet => (
          <UserCard key={tweet.id} tweet={tweet}></UserCard>
        ))}
      </InnerContainer>
    </Container>
  );
};

export default Tweets;

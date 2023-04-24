import BackLink from 'components/BackLink/BackLink';
import { Container, InnerContainer } from './Tweets.styled';
import { useSelector } from 'react-redux';
import { selectTweets } from 'redux/tweets/selectors';
import UserCard from 'components/UserCard/UserCard';
import LoadMoreButton from 'components/LoadMoreButton/LoadMoreButton';
import { useState } from 'react';

const Tweets = () => {
  const tweets = useSelector(selectTweets);
  const [page, setPage] = useState(1);
  const [totalPages] = useState(Math.ceil(tweets.length / 3));
  const [visibleTweets, setvisibleTweets] = useState([...tweets].splice(0, 3));

  const handleLoadMore = () => {
    setPage(page + 1);
    setvisibleTweets(prev => prev.concat([...tweets].splice(page * 3, 3)));
  };

  return (
    <Container>
      <BackLink to="/">Back to Home</BackLink>
      <InnerContainer>
        {visibleTweets.map(tweet => (
          <UserCard key={tweet.id} tweet={tweet}></UserCard>
        ))}
      </InnerContainer>
      {totalPages > 1 && page < totalPages && (
        <LoadMoreButton onClick={handleLoadMore} />
      )}
    </Container>
  );
};

export default Tweets;

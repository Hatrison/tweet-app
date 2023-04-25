import BackLink from 'components/BackLink/BackLink';
import { Container, InnerContainer, TopContainer } from './Tweets.styled';
import { useSelector } from 'react-redux';
import { selectVisibleTweets } from 'redux/tweets/selectors';
import UserCard from 'components/UserCard/UserCard';
import LoadMoreButton from 'components/LoadMoreButton/LoadMoreButton';
import { useEffect, useState } from 'react';
import DropdownFilter from 'components/DropdownFilter/DropdownFilter';

const Tweets = () => {
  const tweets = useSelector(selectVisibleTweets);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(Math.ceil(tweets.length / 3));
  const [visibleTweets, setvisibleTweets] = useState([...tweets].splice(0, 3));

  useEffect(() => {
    setvisibleTweets([...tweets].splice(0, 3));
    setPage(1);
    setTotalPages(Math.ceil(tweets.length / 3));
  }, [tweets]);

  const handleLoadMore = () => {
    setPage(page + 1);
    setvisibleTweets(prev => prev.concat([...tweets].splice(page * 3, 3)));
  };

  return (
    <Container>
      <TopContainer>
        <BackLink to="/">Back to Home</BackLink>
        <DropdownFilter />
      </TopContainer>

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

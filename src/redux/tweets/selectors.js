import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'redux/filter/selectors';
import { selectFollowing } from 'redux/following/selectors';

export const selectTweets = state => state.tweets.tweets;

export const selectIsLoading = state => state.tweets.isLoading;

export const selectError = state => state.tweets.error;

export const selectVisibleTweets = createSelector(
  [selectFilter, selectTweets, selectFollowing],
  (filter, tweets, following) => {
    switch (filter) {
      case 'all':
        return tweets;
      case 'follow':
        return tweets.filter(({ id }) => !following.includes(id));
      case 'following':
        return tweets.filter(({ id }) => following.includes(id));
      default:
        return tweets;
    }
  }
);

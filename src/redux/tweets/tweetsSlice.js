import { fetchTweets } from './operations';

const { createSlice, isAnyOf } = require('@reduxjs/toolkit');

const initialState = {
  tweets: [],
  error: null,
  isLoading: false,
};

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchTweets.fulfilled, (state, action) => {
        state.tweets = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(isAnyOf(fetchTweets.pending), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(fetchTweets.rejected), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const tweetsReducer = tweetsSlice.reducer;

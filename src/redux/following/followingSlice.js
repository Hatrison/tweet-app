const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  following: [],
};

const followingSlice = createSlice({
  name: 'following',
  initialState: initialState,
  reducers: {
    addFollowing(state, action) {
      state.following.push(action.payload);
    },
    deleteFollowing(state, action) {
      return state.following.filter(id => id !== action.payload);
    },
  },
});

export const { addFollowing, deleteFollowing } = followingSlice.actions;
export const followingReducer = followingSlice.reducer;

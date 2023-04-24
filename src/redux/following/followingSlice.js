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
      const index = state.following.findIndex(id => id === action.payload);
      state.following.splice(index, 1);
    },
  },
});

export const { addFollowing, deleteFollowing } = followingSlice.actions;
export const followingReducer = followingSlice.reducer;

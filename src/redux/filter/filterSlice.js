const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  status: 'all',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

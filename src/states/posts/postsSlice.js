import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "../../utils/api";

const initialState = {
  posts: [],
};

export const asyncReceivePosts = createAsyncThunk(
  "posts/asyncReceivePosts",
  async (_, { dispatch }) => {
    dispatch(showLoading());

    try {
      const posts = await api.getPosts();
      dispatch(receivePosts(posts));
    } catch (error) {
      alert(error);
    } finally {
      dispatch(hideLoading());
    }
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    receivePosts: (state, action) => {
      state.posts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncReceivePosts.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(asyncReceivePosts.rejected, (state, action) => {
      alert(action.payload);
    });
  },
});

export const { receivePosts } = postsSlice.actions;
export default postsSlice.reducer;

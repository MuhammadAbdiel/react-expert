import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "../../utils/api";

const initialState = {
  post: {},
};

export const asyncReceivePostDetail = createAsyncThunk(
  "postDetail/asyncReceivePostDetail",
  async (id, { dispatch }) => {
    dispatch(showLoading());

    try {
      const post = await api.getPostById(id);
      return { post };
    } catch (error) {
      alert(error);
    } finally {
      dispatch(hideLoading());
    }
  }
);

export const postDetailSlice = createSlice({
  name: "postDetail",
  initialState,
  reducers: {
    clearPostDetail: () => {
      return {
        post: {},
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncReceivePostDetail.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(asyncReceivePostDetail.rejected, (state, action) => {
      alert(action.payload);
    });
  },
});

export const { clearPostDetail } = postDetailSlice.actions;
export default postDetailSlice.reducer;

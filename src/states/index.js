/* istanbul ignore file */

import { configureStore } from "@reduxjs/toolkit";
import { loadingBarReducer } from "react-redux-loading-bar";
import postDetailReducer from "./postDetail/reducer";
import postsReducer from "./posts/reducer";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    postDetail: postDetailReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;

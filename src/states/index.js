/* istanbul ignore file */

import { configureStore } from "@reduxjs/toolkit";
import { loadingBarReducer } from "react-redux-loading-bar";

// ! This is @reduxjs/toolkit code
import postsReducer from "./posts/postsSlice";
import postDetailReducer from "./postDetail/postDetailSlice";

// ! This is original redux code
// import postDetailReducer from "./postDetail/reducer";
// import postsReducer from "./posts/reducer";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    postDetail: postDetailReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;

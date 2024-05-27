import api from "../../utils/api";
import { hideLoading, showLoading } from "react-redux-loading-bar";

const ActionType = {
  RECEIVE_POSTS: "RECEIVE_POSTS",
};

function receivePostsActionCreator(posts) {
  return {
    type: ActionType.RECEIVE_POSTS,
    payload: {
      posts,
    },
  };
}

function asyncReceivePosts() {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const posts = await api.getPosts();
      dispatch(receivePostsActionCreator(posts));
    } catch (error) {
      alert(error);
    } finally {
      dispatch(hideLoading());
    }
  };
}

export { ActionType, receivePostsActionCreator, asyncReceivePosts };

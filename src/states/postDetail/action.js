import api from "../../utils/api";
import { hideLoading, showLoading } from "react-redux-loading-bar";

const ActionType = {
  RECEIVE_POST_DETAIL: "RECEIVE_POST_DETAIL",
  CLEAR_POST_DETAIL: "CLEAR_POST_DETAIL",
};

function receivePostDetailActionCreator(postDetail) {
  return {
    type: ActionType.RECEIVE_POST_DETAIL,
    payload: {
      postDetail,
    },
  };
}

function clearPostDetailActionCreator() {
  return {
    type: ActionType.CLEAR_POST_DETAIL,
  };
}

function asyncReceivePostDetail(postId) {
  return async (dispatch) => {
    dispatch(clearPostDetailActionCreator());
    dispatch(showLoading());

    try {
      const postDetail = await api.getPostById(postId);
      dispatch(receivePostDetailActionCreator(postDetail));
    } catch (error) {
      alert(error);
    } finally {
      dispatch(hideLoading());
    }
  };
}

export {
  ActionType,
  asyncReceivePostDetail,
  receivePostDetailActionCreator,
  clearPostDetailActionCreator,
};

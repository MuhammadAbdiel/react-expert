import { ActionType } from "./action";

function postDetailReducer(postDetail = {}, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_POST_DETAIL:
      return action.payload.postDetail;
    case ActionType.CLEAR_POST_DETAIL:
      return null;
    default:
      return postDetail;
  }
}

export default postDetailReducer;

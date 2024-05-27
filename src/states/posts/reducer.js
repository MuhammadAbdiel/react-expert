import { ActionType } from "./action";

function postsReducer(posts = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_POSTS:
      return action.payload.posts;
    default:
      return posts;
  }
}

export default postsReducer;

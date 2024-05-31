/**
 * test scenario for postDetailReducer
 *
 * - postDetailReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the posts when given by RECEIVE_POST_DETAIL action
 *  - should return null when given by CLEAR_POST_DETAIL action
 *
 */

import { describe, it, expect } from "vitest";
import postDetailReducer from "./reducer";

describe("postDetailReducer", () => {
  it("should return the initial state when given by unknown action", () => {
    // Arrange
    const initialState = null;
    const action = { type: "UNKNOWN" };

    // Action
    const nextState = postDetailReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState);
  });

  it("should return the posts when given by RECEIVE_POST_DETAIL action", () => {
    // Arrange
    const initialState = null;
    const action = {
      type: "RECEIVE_POST_DETAIL",
      payload: {
        postDetail: {
          id: 1,
          title: "title",
          body: "body",
        },
      },
    };

    // Action
    const nextState = postDetailReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(action.payload.postDetail);
  });

  it("should return null when given by CLEAR_POST_DETAIL action", () => {
    // Arrange
    const initialState = {
      id: 1,
      title: "title",
      body: "body",
    };
    const action = {
      type: "CLEAR_POST_DETAIL",
    };

    // Action
    const nextState = postDetailReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(null);
  });
});

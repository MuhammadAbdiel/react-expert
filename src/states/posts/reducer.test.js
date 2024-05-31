/**
 * test scenario for postsReducer
 *
 * - postsReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the posts when given by RECEIVE_POSTS action
 *
 */

import { describe, it, expect } from "vitest";
import postsReducer from "./reducer";

describe("postsReducer", () => {
  it("should return the initial state when given by unknown action", () => {
    // Arrange
    const initialState = [];
    const action = { type: "UNKNOWN" };

    // Action
    const nextState = postsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState);
  });

  it("should return the posts when given by RECEIVE_POSTS action", () => {
    // Arrange
    const initialState = [];
    const action = {
      type: "RECEIVE_POSTS",
      payload: {
        posts: [
          {
            id: 1,
            title: "title 1",
            body: "body 1",
          },
          {
            id: 2,
            title: "title 2",
            body: "body 2",
          },
        ],
      },
    };

    // Action
    const nextState = postsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual([
      {
        id: 1,
        title: "title 1",
        body: "body 1",
      },
      {
        id: 2,
        title: "title 2",
        body: "body 2",
      },
    ]);
  });
});

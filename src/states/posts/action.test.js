/**
 * test scenario for asyncReceivePosts thunk
 *
 * - asyncReceivePosts thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import { describe, beforeEach, afterEach, it, expect, vi } from "vitest";
import api from "../../utils/api";
import { asyncReceivePosts } from "./action";
import { receivePostsActionCreator } from "./action";
import { hideLoading, showLoading } from "react-redux-loading-bar";

const fakePostsResponse = [
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
];

const fakeErrorResponse = new Error("Ups, something went wrong");

describe("asyncReceivePosts thunk", () => {
  beforeEach(() => {
    api._getPosts = api.getPosts;
  });

  afterEach(() => {
    api.getPosts = api._getPosts;

    delete api._getPosts;
  });

  it("should dispatch action correctly when data fetching success", async () => {
    // Arrange
    // stub implementation
    api.getPosts = () => Promise.resolve(fakePostsResponse);

    // mock dispatch
    const dispatch = vi.fn();

    // Action
    await asyncReceivePosts()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receivePostsActionCreator(fakePostsResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it("should dispatch action and call alert correctly when data fetching failed", async () => {
    // Arrange
    // stub implementation
    api.getPosts = () => Promise.reject(fakeErrorResponse);

    // mock dispatch
    const dispatch = vi.fn();

    // mock alert
    window.alert = vi.fn();

    // Action
    await asyncReceivePosts()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse);
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});

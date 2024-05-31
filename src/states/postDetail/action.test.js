/**
 * test scenario for asyncReceivePostDetail thunk
 *
 * - asyncReceivePostDetail thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import { describe, beforeEach, afterEach, it, expect, vi } from "vitest";
import api from "../../utils/api";
import { asyncReceivePostDetail } from "./action";
import { receivePostDetailActionCreator } from "./action";
import { hideLoading, showLoading } from "react-redux-loading-bar";

const fakePostDetailResponse = {
  id: 1,
  title: "title 1",
  body: "body 1",
};

const fakeErrorResponse = new Error("Ups, something went wrong");

describe("asyncReceivePostDetail thunk", () => {
  beforeEach(() => {
    api.__getPostById = api.getPostById;
  });

  afterEach(() => {
    api.getPostById = api.__getPostById;

    delete api.__getPostById;
  });

  it("should dispatch action correctly when data fetching success", async () => {
    // Arrange
    // stub implementation
    api.getPostById = vi.fn().mockResolvedValue(fakePostDetailResponse);

    // mock dispatch
    const dispatch = vi.fn();

    // Action
    await asyncReceivePostDetail()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receivePostDetailActionCreator(fakePostDetailResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it("should dispatch action and call alert correctly when data fetching failed", async () => {
    // Arrange
    // stub implementation
    api.getPostById = vi.fn().mockRejectedValue(fakeErrorResponse);

    // mock dispatch
    const dispatch = vi.fn();

    // mock alert
    window.alert = vi.fn();

    // Action
    await asyncReceivePostDetail()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(dispatch).not.toHaveBeenCalledWith(
      receivePostDetailActionCreator(fakePostDetailResponse)
    );
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse);
  });
});

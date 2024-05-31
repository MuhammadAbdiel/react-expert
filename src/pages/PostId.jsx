import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  asyncReceivePostDetail,
  clearPostDetail,
} from "../states/postDetail/postDetailSlice";
import { useEffect } from "react";
// import { asyncReceivePostDetail } from "../states/postDetail/action";

function PostId() {
  const { id } = useParams();
  const { post } = useSelector((state) => state.postDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceivePostDetail(id));
    return () => {
      dispatch(clearPostDetail());
    };
  }, [dispatch, id]);

  if (!post) {
    return null;
  }

  return (
    <>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
    </>
  );
}

export default PostId;

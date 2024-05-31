import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { asyncReceivePostDetail } from "../states/postDetail/action";
import { useEffect } from "react";

function PostId() {
  const { id } = useParams();
  const postDetail = useSelector((states) => states.postDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceivePostDetail(id));
  }, [dispatch, id]);

  if (!postDetail) {
    return null;
  }

  return (
    <div>
      <h2>{postDetail?.title}</h2>
      <p>{postDetail?.body}</p>
    </div>
  );
}

export default PostId;

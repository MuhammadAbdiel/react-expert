import { useSelector, useDispatch } from "react-redux";
import { asyncReceivePosts } from "../states/posts/action";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Posts() {
  const posts = useSelector((states) => states.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceivePosts());
  }, [dispatch]);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;

import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import PostId from "./pages/PostId";
import "./App.css";
import Loading from "./components/Loading";

function App() {
  return (
    <>
      <Loading />
      <div className="container">
        <nav>
          <Link to="/">Home</Link> |<Link to="/posts">Posts</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostId />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

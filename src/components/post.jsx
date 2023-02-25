import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AxiosPath from "../utils/axiousPath";
import "../assets/style/posts.css";

const Post = () => {
  const [posts, setPosts] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    loadshowpage();
  }, []);

  const loadshowpage = () => {
    axios
      .get(AxiosPath())
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  let date;
  return (
    <div className="post-body">
      <h1 className="ms-5 mt-3">Posts</h1>
      <div className="create-new-post">
        <button className="btn btn-dark ms-5 mt-3 mb-3">New Post</button>
      </div>
      {posts.map((post) => {
        const { id, title, updated_at, user } = post;
        date = new Date(updated_at);
        return (
          <div key={id} className="row col-6 post-index-card ms-5">
            <div className="card mb-4 rounded-3 shadow post-index-card-body">
              <div className="card-header py-3 text-start">
                <h4 className="my-0 fw-normal">{user.name}</h4>
                <h6 className="my-0 fw-normal text-muted">
                  {date.toLocaleDateString()}
                </h6>
              </div>

              <div className="text-end">
                <button className="btn btn-outline-dark m-2">Edit</button>
                <button className="btn btn-outline-dark">Delete</button>
              </div>
              <div className="card-body">
                <h3 className="card-title text-start">{title}</h3>
                <Link to={`/post/${id}`} className="w-100 btn btn-outline-dark">
                  Continue Reading
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Post;

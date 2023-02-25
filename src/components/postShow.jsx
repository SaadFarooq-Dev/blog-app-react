import React, { useEffect, useState } from "react";
import axios from "axios";
import AxiosPath from "../utils/axiousPath";
import "../assets/style/show.css";

const PostShow = (props) => {
  const [post, setPost] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    loadshowpage();
  }, []);

  const loadshowpage = () => {
    axios
      .get(AxiosPath(props.postId))
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  const { title, updated_at, user, content } = post;
  let date = new Date(updated_at);

  return (
    <div className="post-show">
      <div className="post-show-card ">
        <div className="col-md-12 mt-4">
          <div className="card mb-4 rounded-3 shadow-lg">
            <div className="card-header py-3 text-start">
              <h4 className="my-0 fw-normal">{user.name} </h4>
              <h6 className="my-0 fw-normal text-muted">
                {date.toLocaleDateString()}
              </h6>
              <h3 className="card-title">{title}</h3>
              <div className="text-end">
                <button className="btn btn-primary m-3">Suggest</button>
                <button className="btn btn-danger"> Report</button>
              </div>
            </div>
            <div className="card-body ms-5 me-5">
              <div dangerouslySetInnerHTML={{ __html: content }} />
              <div className="like-button text-end" id="like-post">
                <button className="btn btn-success">Like</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostShow;

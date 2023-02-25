import { useParams } from "react-router-dom";
import React from "react";
import PostShow from "../components/postShow";

const Show = () => {
  const { id } = useParams();
  return (
    <>
      <PostShow postId={id} />
    </>
  );
};

export default Show;

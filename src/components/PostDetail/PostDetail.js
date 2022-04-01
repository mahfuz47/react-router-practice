import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { postId } = useParams();

  const [posts, setPosts] = useState({});
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((data) => setPosts(data.data));
  }, [postId]);
  return (
    <div>
      <h4>This is posts detail for: {postId}</h4>
      <h5>{posts.title}</h5>
      <p>{posts.body}</p>
    </div>
  );
};

export default PostDetail;

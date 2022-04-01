import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
  //   const params = useParams();
  const { friendId } = useParams();
  const [friend, setFriend] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    // console.log(url);
    axios.get(url).then((data) => setFriend(data.data));
  }, [friendId]);

  return (
    <div>
      <h1>No one is my best friend: {friendId}</h1>
      <h3>Name: {friend.name}</h3>
      <h4>Email: {friend.email}</h4>
      <h6>Website: {friend.website}</h6>
      <p>
        <small>city: {friend.address?.city}</small>
      </p>
    </div>
  );
};

export default FriendDetail;

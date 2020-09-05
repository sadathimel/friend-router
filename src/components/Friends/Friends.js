import React from "react";
import { Link, useHistory } from "react-router-dom";

const Friends = (props) => {
  const { name, email, id } = props.friend;
  const history = useHistory();
  const handleClick = (friendId) => {
    const url = `/friend/${friendId}`;
    history.push(url);
  };
  const friendStyle = {
    border: "2px solid purple",
    margin: "20px",
    padding: "20px",
    borderRadius: "20px",
  };
  return (
    <div style={friendStyle}>
      <h1>Name: {name}</h1>
      <p>Email: {email}</p>
      <p>
        {/* <Link to={`/friend/${id}`}>
          <button>Show detail of {id}</button>
        </Link> */}
        <button onClick={()=> handleClick(id)}>click me</button>
      </p>
    </div>
  );
};

export default Friends;

import React from "react";
import "./UsersList.css";
import UserItem from "../components/UserItem";

//return Text No User Found when there is no user OR render users

function UsersList(props) {
  if (props.items.length === 0) {
    return <h1>No User Found...</h1>;
  }
  return (
    <ul className="users-list">
      {props.items.map(user => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        );
      })}
    </ul>
  );
}

export default UsersList;

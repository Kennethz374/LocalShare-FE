import React from "react";

import UserItem from "../components/UserItem";
import Card from "../../shared/components/UIElement/Card";
import "./UsersList.css";

//return Text No User Found when there is no user OR render users

function UsersList(props) {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h1>No User Found...</h1>
        </Card>
      </div>
    );
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

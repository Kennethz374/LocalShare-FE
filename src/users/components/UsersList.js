import React from "react";
import "./UsersList.css";

//return Text No User Found when there is no user OR render users

function UsersList(props) {
  props.items.length === 0 ? (
    <div className="center">
      <h2>Sorry, No users found.</h2>
    </div>
  ) : (
    <ul>
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

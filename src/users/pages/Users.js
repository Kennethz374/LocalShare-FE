import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "max",
      image:
        "https://specials-images.forbesimg.com/imageserve/5cd963805ea6490008c84023/960x0.jpg?fit=scale",
      places: 3
    }
  ];
  return <UsersList items={USERS} />;
};

export default Users;

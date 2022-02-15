import React from "react";
import UsersList from "./Table";

const Users = (props) => {
  const Table = props.data.users.map((user) => (
    <UsersList
      email={user.email}
      id={user.id}
      key={user.id}
    />
  ));

  return (
    <div>
      <div>{Table}</div>
    </div>
  );
};
export default Users;

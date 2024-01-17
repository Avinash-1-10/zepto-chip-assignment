import React, { useState } from "react";
import Chips from "./components/Chips";
import data from "./users";

const App = () => {
  const [users, setUsers] = useState(data);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const addSelectedUsers = (newUser) => {
    setSelectedUsers([...selectedUsers, newUser]);
    setUsers(users.filter((user) => user.id !== newUser.id));
  };

  const removeUser = (removedUser) => {
    setUsers([...users, removedUser]);
    setSelectedUsers((prev) => prev.filter((user) => user.id !== removedUser.id));
  };

  return (
    <div className="border-b-2 border-blue-600 flex gap-5 px-24 pt-5 pb-1 justify-center">
      <Chips selectedUsers={selectedUsers} removeUser={removeUser} addSelectedUsers={addSelectedUsers} users={users}/>
    </div>
  );
};

export default App;

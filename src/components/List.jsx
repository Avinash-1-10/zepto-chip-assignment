import React, { useEffect, useState } from "react";

const List = ({ users, searchQuery, addSelectedUsers }) => {
  const [filteredList, setFilteredList] = useState(users);

  useEffect(() => {
    if (searchQuery) {
      setFilteredList(
        users.filter((user) =>
          user.username.trim().toLowerCase().includes(searchQuery.trim().toLowerCase())
        )
      );
    } else {
      setFilteredList(users);
    }
  }, [searchQuery, users]);

  return (
    <div className="flex flex-col gap-2 justify-center">
      {filteredList.map((user) => (
        <div
          key={user.id}
          className="py-1 px-2 w-fit rounded-3xl flex items-center gap-3 border cursor-pointer transform transition-transform duration-300  hover:scale-105 hover:shadow-lg hover:bg-gray-200"
          onMouseDown={(e) => {
            e.preventDefault();
            addSelectedUsers(user);
          }}
        >
          <img
            src={user.profileImage}
            alt=""
            className="h-10 w-10 rounded-full"
          />
          <p className="font-semibold text-blue-500">{user.username}</p>
          <p className="text-gray-500 text-sm">{user.email}</p>
        </div>
      ))}
      {filteredList.length === 0 && <p>No users found</p>}
    </div>
  );
};

export default List;

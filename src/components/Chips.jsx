import React, { useEffect, useState } from 'react';
import Chip from './Chip';
import SearchUser from './SearchUser';

const Chips = ({ selectedUsers, removeUser, addSelectedUsers, users }) => {
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const removeLastChip = () => {
    if (highlightedIndex !== null) {
      removeUser(selectedUsers[highlightedIndex]);
      setHighlightedIndex(null);
    } else if (selectedUsers.length > 0) {
      setHighlightedIndex(selectedUsers.length - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 8 && searchQuery === "") {
        removeLastChip();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [removeLastChip]);

  return (
    <div
      className='flex gap-2 flex-wrap pb-3 justify-center items-center'

    >
      {selectedUsers.map((user, index) => (
        <Chip
          key={user.id}
          user={user}
          removeUser={removeUser}
          isHighlighted={index === highlightedIndex}
          setHighlightedIndex={setHighlightedIndex}
        />
      ))}
      <SearchUser addSelectedUsers={addSelectedUsers} users={users} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
    </div>
  );
};

export default Chips;

import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';

const Chip = ({ user, removeUser, isHighlighted, setHighlightedIndex }) => {
    const removeChip = ()=>{
        setHighlightedIndex(null);
        removeUser(user)
    }
  return (
    <div
      className={`flex px-2 py-1 border rounded-2xl w-fit gap-1 items-center text-white ${
        isHighlighted ? 'bg-red-600 ' : 'bg-blue-500'
      }`}
    >
      <img src={user.profileImage} alt="" className="h-5 w-5 rounded-full" />
      <p className="text-sm">{user.username}</p>
      <IoCloseSharp onClick={removeChip} className='bg-white text-black rounded-full cursor-pointer'/>
    </div>
  );
};

export default Chip;

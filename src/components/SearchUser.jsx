import React,{useState} from 'react'
import List from './List';

const SearchUser = ({addSelectedUsers, users, setSearchQuery, searchQuery}) => {
    const [isInputActive, setIsInputActive] = useState(false);
    const handleInputClick = () => {
        setIsInputActive(true);
      };
    
      const handleInputBlur = () => {
        setIsInputActive(false);
      };
  return (
    <div>
        <input
          type="text"
          className="border px-1 rounded-md py-1 border-blue-500 outline-none"
          placeholder="Search here..."
          onClick={handleInputClick}
          onFocus={handleInputClick}
          onBlur={handleInputBlur}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div
          className={`absolute border mt-5 px-2 py-3 rounded-md shadow-lg ${
            isInputActive ? "block" : "hidden"
          }`}
        >
          <List
            users={users}
            searchQuery={searchQuery}
            addSelectedUsers={addSelectedUsers}
          />
        </div>
      </div>
  )
}

export default SearchUser
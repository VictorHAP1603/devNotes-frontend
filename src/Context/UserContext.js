import { createContext, useState } from "react";

export const UserStorage = createContext();

const UserContext = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [searchPriority, setSearchPriority] = useState("");

  return (
    <UserStorage.Provider
      value={{ notes, setNotes, searchPriority, setSearchPriority }}
    >
      {children}
    </UserStorage.Provider>
  );
};

export default UserContext;

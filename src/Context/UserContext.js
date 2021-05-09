import { createContext, useState } from "react";

export const UserStorage = createContext();

const UserContext = ({ children }) => {
  const [notes, setNotes] = useState([]);

  return (
    <UserStorage.Provider value={{ notes, setNotes }}>
      {children}
    </UserStorage.Provider>
  );
};

export default UserContext;

import React, { useContext, useEffect, useState } from "react";
import { UserStorage } from "../../Context/UserContext";
import { GET_NOTES } from "../../services/api";
import NoteItem from "./NoteItem";
import { MainNotesContainer } from "./style";

const MainNotes = () => {
  const { notes, setNotes } = useContext(UserStorage);

  useEffect(async () => {
    const { url } = GET_NOTES();
    const notes = await (await fetch(url)).json();

    setNotes(notes);
  }, []);

  return (
    <MainNotesContainer>
      <ul>
        {notes &&
          notes.map(({ _id, title, notes, priority }) => (
            <NoteItem
              key={_id}
              title={title}
              notes={notes}
              priority={priority}
            />
          ))}
      </ul>
    </MainNotesContainer>
  );
};

export default MainNotes;

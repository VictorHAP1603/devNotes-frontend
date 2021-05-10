import React, { useContext, useEffect, useState } from "react";
import { UserStorage } from "../../Context/UserContext";
import { GET_NOTES } from "../../services/api";
import NoteItem from "./NoteItem";
import { MainNotesContainer } from "./style";

const MainNotes = () => {
  const { notes, setNotes } = useContext(UserStorage);

  useEffect(async () => {
    const { url, options } = GET_NOTES();
    const notes = await (await fetch(url, options)).json();

    setNotes(notes);
  }, []);

  return (
    <MainNotesContainer>
      {notes.length === 0 && <h1>Não possui nenhuma anotação</h1>}

      {notes.length !== 0 && (
        <ul>
          {notes &&
            notes.map(({ _id, title, notes, priority }, index) => (
              <NoteItem
                key={_id}
                title={title}
                note={notes}
                priority={priority}
                id={_id}
              />
            ))}
        </ul>
      )}
    </MainNotesContainer>
  );
};

export default MainNotes;

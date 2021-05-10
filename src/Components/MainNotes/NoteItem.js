import React, { useContext, useRef, useState } from "react";
import { UserStorage } from "../../Context/UserContext";
import {
  CHANGE_PRIORITY,
  REMOVE_NOTE,
  UPDATE_NOTE_VALUE,
} from "../../services/api";

const NoteItem = ({ priority, title, note, id }) => {
  const note_item = useRef();
  const { notes, setNotes, searchPriority } = useContext(UserStorage);
  const [priorityValue, setPriorityValue] = useState(priority);

  async function removeItem(e, id) {
    try {
      const { url, options } = REMOVE_NOTE(id);
      const removed_note = await (await fetch(url, options)).json();

      setNotes(notes.filter((note) => note._id !== id));
    } catch (err) {
      console.log(err);
    }
  }

  async function changePriority(id) {
    try {
      const { url, options } = CHANGE_PRIORITY(id);
      const changed_note = await (await fetch(url, options)).json();
      setPriorityValue(!priorityValue);
      filterNotesWhenChangePriority(changed_note._id);
    } catch (err) {
      console.log(err);
    }
  }

  function filterNotesWhenChangePriority(id) {
    if (searchPriority === "true") {
      setNotes(notes.filter((note) => note._id !== id));
    } else if (searchPriority === "false") {
      setNotes(notes.filter((note) => note._id !== id));
    }
  }

  async function updateNote(event) {
    const regex = /[^\ ]+/;
    try {
      const new_value_note = event.target.value;
      if (
        (event.key === "Enter" && regex.test(new_value_note)) ||
        (event.type === "blur" && regex.test(new_value_note))
      ) {
        event.target.setAttribute("disabled", "true");
        const { url, options } = UPDATE_NOTE_VALUE(id, {
          notes: new_value_note,
        });

        await (await fetch(url, options)).json();
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <li
      ref={note_item}
      className={`${priorityValue ? "priority" : ""} notepad-infos `}
    >
      <div className="header-note">
        <strong>{title}</strong>
        <div onClick={(e) => removeItem(e, id)}>x</div>
      </div>
      <textarea
        defaultValue={note}
        onBlur={updateNote}
        onClick={(e) => e.target.removeAttribute("disabled")}
        onKeyUp={updateNote}
      ></textarea>
      <span onClick={() => changePriority(id)}>!</span>
    </li>
  );
};

export default NoteItem;

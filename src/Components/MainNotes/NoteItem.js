import React from "react";

const NoteItem = ({ priority, title, notes }) => {
  return (
    <li className={`${priority ? "priority" : ""} notepad-infos `}>
      <div>
        <strong>{title}</strong>
        <div>x</div>
      </div>
      <textarea disabled defaultValue={notes}></textarea>
      <span>!</span>
    </li>
  );
};

export default NoteItem;

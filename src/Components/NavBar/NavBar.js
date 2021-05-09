import React, { useContext, useState } from "react";
import { UserStorage } from "../../Context/UserContext";
import { POST_NOTES } from "../../services/api";
import { NavBarContainer } from "./style";

const NavBar = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const { notes, setNotes } = useContext(UserStorage);

  async function createNote(event) {
    event.preventDefault();
    const { url, options } = POST_NOTES({
      title,
      notes: note,
      priority: true,
    });

    try {
      const response = await fetch(url, options);
      const data = await response.json();

      if (!response.ok) throw new Error(data.error);
      setNotes([...notes, data]);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <NavBarContainer>
      <strong>Caderno de Notas</strong>
      <form onSubmit={createNote}>
        <div className="input-block">
          <label htmlFor="title">Título da Anotação</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="notes">Anotações</label>
          <textarea
            id="notes"
            name="notes"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>

        <div className="radios">
          <label htmlFor="false">Não é Prioridade</label>
          <input type="radio" id="false" />
          <label htmlFor="true">É Prioridade</label>
          <input type="radio" id="true" />
        </div>

        <button type="submit">Salvar</button>
      </form>
    </NavBarContainer>
  );
};

export default NavBar;

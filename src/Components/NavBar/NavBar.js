import React, { useContext, useEffect, useState } from "react";
import { UserStorage } from "../../Context/UserContext";
import { FILTER_NOTES, POST_NOTES } from "../../services/api";
import InputBlock from "./InputBlock";
import RadioBlock from "./RadioBlock";
import { NavBarContainer } from "./style";
import TextAreaBlock from "./TextAreaBlock";

const NavBar = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [priorityValue, setPriorityValue] = useState(false);
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);

  const { notes, setNotes, searchPriority, setSearchPriority } = useContext(
    UserStorage
  );

  useEffect(async () => {
    setNotes([]);
    const { url } = FILTER_NOTES(searchPriority);
    const filtered_notes = await (await fetch(url)).json();
    setNotes(filtered_notes);
  }, [searchPriority]);

  async function createNote(event) {
    event.preventDefault();

    try {
      if (note !== "" && title !== "") {
        const { url, options } = POST_NOTES({
          title,
          notes: note,
          priority: priorityValue,
        });

        const response = await fetch(url, options);
        const data = await response.json();

        if (!response.ok) throw new Error(data.error);
        filterNotesWhenCreated(data);
        setTitle("");
        setNote("");
      }
    } catch (err) {
      console.log(err);
    }
  }

  function filterNotesWhenCreated(data) {
    if (searchPriority === "true" && data.priority === true) {
      setNotes([...notes, data]);
    } else if (searchPriority === "false" && data.priority === false) {
      setNotes([...notes, data]);
    } else if (searchPriority === "") {
      setNotes([...notes, data]);
    }
  }

  function handleButtonDisabled() {
    if (title !== "" && note !== "") {
      setButtonIsDisabled(false);
    } else {
      setButtonIsDisabled(true);
    }
  }

  return (
    <NavBarContainer buttonIsDisabled={buttonIsDisabled}>
      <strong>Caderno de Notas</strong>

      <form onSubmit={createNote}>
        <InputBlock
          element="input"
          title="Título da Anotação"
          id="title"
          value={title}
          setValue={setTitle}
          handleButtonDisabled={handleButtonDisabled}
        />

        <TextAreaBlock
          title="Anotações"
          id="notes"
          value={note}
          setValue={setNote}
          handleButtonDisabled={handleButtonDisabled}
        />

        <div className="radios">
          <RadioBlock
            setValue={setPriorityValue}
            checked={priorityValue}
            value={false}
            id="false"
            label="Não é Prioridade"
          />
          <RadioBlock
            setValue={setPriorityValue}
            checked={priorityValue}
            value={true}
            id="true"
            label="É Prioridade"
          />
        </div>

        <button type="submit">Salvar</button>
      </form>

      <div className="search-priority">
        <RadioBlock
          setValue={setSearchPriority}
          checked={searchPriority}
          value=""
          label="Todos"
          id="todos"
        />
        <RadioBlock
          setValue={setSearchPriority}
          checked={searchPriority}
          value="true"
          label="Prioridade"
          id="prioridade"
        />
        <RadioBlock
          setValue={setSearchPriority}
          checked={searchPriority}
          value="false"
          label="Não Prioridade"
          id="sem-prioridade"
        />
      </div>
    </NavBarContainer>
  );
};

export default NavBar;

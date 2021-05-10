import React from "react";

const InputBlock = ({ title, id, value, setValue, handleButtonDisabled }) => {
  return (
    <div className="input-block">
      <label htmlFor={id}>{title}</label>
      <input
        type="text"
        id={id}
        name={id}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          handleButtonDisabled();
        }}
      />
    </div>
  );
};

export default InputBlock;

import React from "react";

const RadioBlock = ({ setValue, checked, value, label, id }) => {
  return (
    <div className="radio-block">
      <input
        type="radio"
        id={id}
        checked={checked === value}
        onChange={() => setValue(value)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioBlock;

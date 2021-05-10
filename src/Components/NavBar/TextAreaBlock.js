import React from "react";

const TextAreaBlock = ({
  id,
  title,
  setValue,
  value,
  handleButtonDisabled,
}) => {
  return (
    <div className="input-block">
      <label htmlFor={id}>{title}</label>
      <textarea
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

export default TextAreaBlock;

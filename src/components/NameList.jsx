import React from "react";
import NameInput from "./NameInput";

const NameList = ({ numPeople, names, onNameChange }) => {
  return (
    <div>
      <h2>Enter Names:</h2>
      {Array.from({ length: numPeople }).map((_, index) => (
        <NameInput
          key={index}
          index={index}
          value={names[index] || ""}
          onChange={onNameChange}
        />
      ))}
    </div>
  );
};

export default NameList;

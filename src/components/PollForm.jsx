import React, { useState } from "react";
import NameList from "./NameList";

const PollForm = () => {
  const [numPeople, setNumPeople] = useState(0);
  const [names, setNames] = useState([]);
  const [pollCreated, setPollCreated] = useState(false);

  const handleNumPeopleChange = (e) => {
    const value = parseInt(e.target.value, 10) || 0;
    setNumPeople(value);
    setNames(Array(value).fill(""));
  };

  const handleNameChange = (index, newName) => {
    const updatedNames = [...names];
    updatedNames[index] = newName;
    setNames(updatedNames);
  };

  const handleCreatePoll = () => {
    if (names.every((name) => name.trim() !== "")) {
      console.log("Poll created with names:", names);
      setPollCreated(true);
    } else {
      alert("Please fill out all name fields.");
    }
  };

  return (
    <div>
      <h1>YOU NOT DOWN</h1>
      <div>
        <label htmlFor="numPeople">Number of People:</label>
        <input
          id="numPeople"
          type="number"
          min="0"
          value={numPeople}
          onChange={handleNumPeopleChange}
        />
      </div>

      <NameList numPeople={numPeople} names={names} onNameChange={handleNameChange} />

      <button onClick={handleCreatePoll}>Create Poll</button>

      {pollCreated && (
        <div>
          <h3>Poll Successfully Created!</h3>
          <p>Participants:</p>
          <ul>
            {names.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PollForm;

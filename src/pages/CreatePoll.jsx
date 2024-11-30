import React, { useState } from "react";

const CreatePoll = () => {
  // State to hold the number of people and their names
  const [numPeople, setNumPeople] = useState(0);
  const [names, setNames] = useState([]);
  const [pollCreated, setPollCreated] = useState(false);

  // Handle the change in number of people
  const handleNumPeopleChange = (e) => {
    const value = parseInt(e.target.value, 10) || 0;
    setNumPeople(value);

    // Update names array with empty fields
    setNames(Array(value).fill(""));
  };

  // Handle the change in individual name fields
  const handleNameChange = (index, newName) => {
    const updatedNames = [...names];
    updatedNames[index] = newName;
    setNames(updatedNames);
  };

  // Handle creating the poll
  const handleCreatePoll = () => {
    if (names.every((name) => name.trim() !== "")) {
      // Example: Here you can send the names to your server or handle the poll logic
      console.log("Poll created with names:", names);
      setPollCreated(true);
    } else {
      alert("Please fill out all name fields.");
    }
  };

  return (
    <div>
      <h1>Create Poll</h1>
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

      <div>
        <h2>Enter Names:</h2>
        {Array.from({ length: numPeople }).map((_, index) => (
          <div key={index}>
            <label htmlFor={`name-${index}`}>Person {index + 1}:</label>
            <input
              id={`name-${index}`}
              type="text"
              value={names[index] || ""}
              onChange={(e) => handleNameChange(index, e.target.value)}
            />
          </div>
        ))}
      </div>

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

export default CreatePoll;
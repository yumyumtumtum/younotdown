import React from "react";
import PollForm from "../PollForm/PollForm";
import "./CreatePoll.css";

const CreatePoll = () => {
  return (
    <div className="container-wrapper">
      <div className="container">
        <PollForm />
    </div>
    </div>
  );
};

export default CreatePoll;

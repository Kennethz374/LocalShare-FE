import React from "react";

import Input from "../../shared/components/FormElements/Input";
import "./NewPlace.css";

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[]}
        errorText="Please enter valid title"
      />
    </form>
  );
};

export default NewPlace;
// add an input component which contains type, label, validators(validation logic), onChange

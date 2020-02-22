//only allow user to update title and description
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElement/Card";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import "./PlaceForm.css";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "empire state buidling",
    description: "nice building",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/800px-Empire_State_Building_%28aerial_view%29.jpg",
    address: "20 w 34th st, new york. ny 10001",
    creator: "u1",
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    }
  },

  {
    id: "p2",
    title: "empire state buidling",
    description: "nice building, building building building building building",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/800px-Empire_State_Building_%28aerial_view%29.jpg",
    address: "20 w 34th st, new york. ny 10001",
    creator: "u2",
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    }
  }
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;
  const [formState, inputHandler, setFormData] = useForm(
    {
      title: { value: "", isValid: false },
      description: {
        value: "",
        isValid: false
      }
    },
    false
  );
  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true
          },
          description: {
            value: identifiedPlace.description,
            isValid: true
          }
        },
        true
      );
    }
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs); // update to server
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2> Could not find place!</h2>
        </Card>
      </div>
    );
  }

  if (!formState.inputs.title.value) {
    return (
      <div className="center">
        <Card>
        <h2> Could not find place!</h2>
        </Card>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />

      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description min. 5 characters."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        Update place
      </Button>
    </form>
  );
};

export default UpdatePlace;

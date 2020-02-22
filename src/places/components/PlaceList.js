import React from "react";

import Card from "../../shared/components/UIElement/Card";
import PlaceItem from "./PlaceItem";
import Button from "../../shared/components/FormElements/Button";
import "./PlaceList.css";

const PlaceList = props => {
  if (props.items.length === 0) {
    return (
      <div className="palce-list center">
        <Card>
          <h1> No places yet, Let's create one</h1>
          <Button to="/places/new">share places</Button>
        </Card>
      </div>
    );
  }
  return (
    <ul className="place-list">
      {props.items.map(place => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;

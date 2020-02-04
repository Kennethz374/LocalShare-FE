import React from "react";
import {useParams} from 'react-router-dom'

import PlaceList from "../components/PlaceList";

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
    description: "nice building",
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

const UserPlaces = () => {
  const userId = useParams().userId; //store the dynamic id segment from the route in app using Params().userID
  const loadedPlaces = DUMMY_PLACES.filter((place)=> place.creator=== userId) //only the matching userId will show now

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;

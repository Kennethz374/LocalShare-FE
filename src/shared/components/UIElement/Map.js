import React, { useRef, useEffect } from "react";
//useRef can help create references
import "./Map.css";

const Map = props => {
  const mapRef = useRef();
  const { center, zoom } = props;
  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom
    }); //need a pointer to tell where to render the map like document.getElement...

    new window.google.maps.Marker({ position: center, map: map });
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;

//ref={mapRef} create a magic connection to the div to the mapRef obj

import GoogleMapReact from "google-map-react";
import LocationMarker from "../LocationMarker";

import "./styles.scss";

function Maps({ route, center, zoom }) {
  const markers = route.map((rt) => {
    return <LocationMarker lat={rt[1].lat} lng={rt[1].lng} />;
  });

  return (
    <div className="map__container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB7qkcqGLRpF9PmaVyVCJtp-O3GvnQVQJM" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
    </div>
  );
}

Maps.defaultProps = {
  center: {
    lat: -30.032017,
    lng: -51.179215,
  },
  zoom: 13,
};

export default Maps;

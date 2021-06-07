import GoogleMapReact from "google-map-react";
import LocationMarker from "../LocationMarker";

import "./styles.scss";

function Maps({ route, center, zoom }) {
  console.log("Rota no mapa", route);

  // const markers = route[0].map((rt) => {
  //   if (rt) {
  //     return console.log(rt);
  //   } else {
  //     return null;
  //   }
  //   //   return <LocationMarker lat={rt[0]} lng={rt[1]} />;
  // });

  return (
    <div className="map__container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB7qkcqGLRpF9PmaVyVCJtp-O3GvnQVQJM" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {/* {markers} */}
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

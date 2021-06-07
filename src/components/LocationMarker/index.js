import "./styles.scss";

function LocationMarker({ lat, lng }) {
  return (
    <div className="location-marker__container">
      <div className="location-icon" />
    </div>
  );
}

export default LocationMarker;

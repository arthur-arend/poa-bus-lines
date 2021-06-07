import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/moon-full";

// import { Container } from './styles';

function LocationMarker({ lat, lng }) {
  return (
    <div className="location-marker">
      <Icon icon={locationIcon} className="location-icon" />
    </div>
  );
}

export default LocationMarker;

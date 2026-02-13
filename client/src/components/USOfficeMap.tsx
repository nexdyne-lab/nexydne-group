import { useRef } from "react";
import { MapView } from "@/components/Map";

// New York office coordinates (using a central Manhattan location)
const NY_OFFICE_COORDS = { lat: 40.7484, lng: -73.9857 };

export function USOfficeMap() {
  const mapRef = useRef<google.maps.Map | null>(null);

  const handleMapReady = (map: google.maps.Map) => {
    mapRef.current = map;
    
    // Add a marker for the office location
    new google.maps.marker.AdvancedMarkerElement({
      map,
      position: NY_OFFICE_COORDS,
      title: "NexDyne Consulting Group - New York Office",
    });
  };

  return (
    <MapView
      className="w-full h-full min-h-[400px]"
      initialCenter={NY_OFFICE_COORDS}
      initialZoom={15}
      onMapReady={handleMapReady}
    />
  );
}

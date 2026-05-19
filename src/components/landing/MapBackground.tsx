import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export function MapBackground() {
  return (
    <div className="absolute inset-y-0 -left-[8%] w-[115%]">
      <MapContainer
        center={[49.2577, -123.0707]}
        zoom={12.5}
        zoomControl={false}
        attributionControl={false}
        dragging={false}
        touchZoom={false}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        boxZoom={false}
        keyboard={false}
        style={{ height: "100%", width: "100%", background: "#0a1a1f" }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
          subdomains="abcd"
          maxZoom={19}
        />
      </MapContainer>
    </div>
  );
}

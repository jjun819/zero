import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

type LatLng = [number, number];
type Route = { id: number; color: string; size: number; speed: number; startT: number; waypoints: LatLng[] };

// Waypoints derived from real OSM intersection data for Vancouver BC.
// Confirmed anchors: Broadway@Granville [49.263,-123.139], Broadway@Cambie [49.263,-123.115],
// Broadway@Main [49.263,-123.101], Commercial-Broadway stn [49.262,-123.069],
// Hastings@Main [49.281,-123.100], Kingsway@Main [49.264,-123.101],
// Kingsway@Knight [49.250,-123.076], Knight lng=-123.077, Fraser lng=-123.090.
const ROUTES: Route[] = [
  // Broadway — heading east
  { id: 1, color: "#1eddc7", size: 6, speed: 0.00050, startT: 0.10,
    waypoints: [[49.263,-123.175],[49.263,-123.139],[49.263,-123.115],[49.263,-123.101],[49.263,-123.069]] },
  // Broadway — heading west
  { id: 2, color: "#6ee7b7", size: 5, speed: 0.00038, startT: 0.55,
    waypoints: [[49.263,-123.069],[49.263,-123.101],[49.263,-123.115],[49.263,-123.139],[49.263,-123.175]] },
  // Hastings St — heading east (lat 49.281 confirmed at Main)
  { id: 3, color: "#1eddc7", size: 6, speed: 0.00045, startT: 0.25,
    waypoints: [[49.281,-123.130],[49.281,-123.100],[49.281,-123.069],[49.281,-123.030]] },
  // Hastings St — heading west
  { id: 4, color: "#6ee7b7", size: 4, speed: 0.00042, startT: 0.75,
    waypoints: [[49.281,-123.030],[49.281,-123.069],[49.281,-123.100],[49.281,-123.130]] },
  // Main St — heading south (lng -123.101 confirmed at Broadway & Hastings)
  { id: 5, color: "#6ee7b7", size: 7, speed: 0.00032, startT: 0.80,
    waypoints: [[49.295,-123.101],[49.281,-123.100],[49.263,-123.101],[49.249,-123.101],[49.234,-123.101]] },
  // Cambie St — heading north (lng -123.115 confirmed at Broadway/City Hall)
  { id: 6, color: "#1eddc7", size: 5, speed: 0.00048, startT: 0.40,
    waypoints: [[49.225,-123.115],[49.249,-123.115],[49.263,-123.115],[49.280,-123.115]] },
  // Fraser St — heading south (lng -123.090 confirmed from OSM)
  { id: 7, color: "#6ee7b7", size: 5, speed: 0.00036, startT: 0.60,
    waypoints: [[49.295,-123.090],[49.281,-123.090],[49.263,-123.090],[49.249,-123.090],[49.225,-123.090]] },
  // Knight St — heading north (lng -123.077 confirmed from OSM)
  { id: 8, color: "#1eddc7", size: 4, speed: 0.00040, startT: 0.20,
    waypoints: [[49.220,-123.077],[49.249,-123.077],[49.263,-123.077],[49.281,-123.077]] },
  // Kingsway — heading SE (waypoints confirmed: Main [49.264,-123.101] → Knight [49.250,-123.076])
  { id: 9, color: "#1eddc7", size: 7, speed: 0.00055, startT: 0.90,
    waypoints: [[49.264,-123.101],[49.250,-123.076],[49.237,-123.052]] },
  // Kingsway — heading NW
  { id: 10, color: "#6ee7b7", size: 6, speed: 0.00055, startT: 0.45,
    waypoints: [[49.237,-123.052],[49.250,-123.076],[49.264,-123.101]] },
  // Granville St — heading south (lng -123.139 confirmed at Broadway)
  { id: 11, color: "#1eddc7", size: 5, speed: 0.00030, startT: 0.15,
    waypoints: [[49.280,-123.139],[49.263,-123.139],[49.249,-123.139],[49.235,-123.139],[49.215,-123.139]] },
  // King Edward Ave (25th) — heading east (lat ~49.249 confirmed from OSM address data)
  { id: 12, color: "#6ee7b7", size: 5, speed: 0.00050, startT: 0.65,
    waypoints: [[49.249,-123.160],[49.249,-123.139],[49.249,-123.115],[49.249,-123.090],[49.249,-123.069]] },
];

function lerpLatLng(waypoints: LatLng[], t: number): LatLng {
  const n = waypoints.length - 1;
  const scaled = Math.min(t, 0.9999) * n;
  const i = Math.floor(scaled);
  const frac = scaled - i;
  const a = waypoints[i];
  const b = waypoints[Math.min(i + 1, n)];
  return [a[0] + (b[0] - a[0]) * frac, a[1] + (b[1] - a[1]) * frac];
}

function AnimatedMarkers() {
  const map = useMap();

  useEffect(() => {
    const state = ROUTES.map(route => {
      const { color, size } = route;
      const glow = size * 2;
      const icon = L.divIcon({
        className: "",
        html: `<div style="position:relative;width:${size}px;height:${size}px">
          <div style="position:absolute;width:${size}px;height:${size}px;top:50%;left:50%;border-radius:50%;border:1.5px solid ${color};animation:map-pulse-ring 2.8s ease-out infinite"></div>
          <div style="position:absolute;width:${size}px;height:${size}px;top:50%;left:50%;border-radius:50%;border:1px solid ${color}60;animation:map-pulse-ring 2.8s ease-out infinite;animation-delay:1.4s"></div>
          <div style="width:${size}px;height:${size}px;border-radius:50%;background:${color};box-shadow:0 0 ${glow}px ${color},0 0 ${glow * 2}px ${color}50;opacity:0.85"></div>
        </div>`,
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2],
      });
      const marker = L.marker(lerpLatLng(route.waypoints, route.startT), {
        icon,
        interactive: false,
      }).addTo(map);
      return { route, t: route.startT, marker };
    });

    let rafId: number;
    const tick = () => {
      state.forEach(s => {
        s.t = (s.t + s.route.speed) % 1;
        s.marker.setLatLng(lerpLatLng(s.route.waypoints, s.t));
      });
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      state.forEach(s => s.marker.remove());
    };
  }, [map]);

  return null;
}

export function MapBackground() {
  return (
    <>
      <style>{`
        @keyframes map-pulse-ring {
          0%   { transform: translate(-50%,-50%) scale(1);   opacity: 0.85; }
          100% { transform: translate(-50%,-50%) scale(4.5); opacity: 0; }
        }
      `}</style>
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
          <AnimatedMarkers />
        </MapContainer>
      </div>
    </>
  );
}

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const locations = [
  { name: "Belgium", lat: 50.8503, lng: 4.3517 },
  { name: "Uzbekistan", lat: 41.2995, lng: 69.2401 },
  { name: "Iraq", lat: 33.3152, lng: 44.3661 },
  { name: "Iran", lat: 35.6892, lng: 51.3890 },
  { name: "Tanzania", lat: -6.7924, lng: 39.2083 },
  { name: "Kenya", lat: -1.2864, lng: 36.8172 },
  { name: "Yemen", lat: 15.3694, lng: 44.1910 },
  { name: "Senegal", lat: 14.7167, lng: -17.4677 },
  { name: "Philippines", lat: 14.5995, lng: 120.9842 },
  { name: "Dominican Republic", lat: 18.4861, lng: -69.9312 },
];

const icon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
});

function GlobalMap() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-6">
          Our Global Reach
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Exporting pharmaceutical products across multiple countries.
        </p>

        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <MapContainer
            center={[20, 20]}
            zoom={2}
            scrollWheelZoom={true}
            style={{ height: "600px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {locations.map((location, index) => (
              <Marker
                key={index}
                position={[location.lat, location.lng]}
                icon={icon}
              >
                <Popup>{location.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

      </div>
    </section>
  );
}

export default GlobalMap;
import "./Simulation.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import RoutingMachine from "./RoutingMachine";
import { useState, useEffect } from "react";

const center = [13.032887746681935, 80.23299688010245];

const Simulation = () => {
  // const [lat, setLat] = useState(13.032887746681935);
  // const [lon, setLon] = useState(80.23299688010245);
  // const [heading, setHeading] = useState(30);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     myfun();
  //   }, 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [lat]);

  // const defaultIcon = L.icon({
  //   iconUrl: "https://unpkg.com/leaflet@1.0.3/dist/images/marker-icon.png",
  //   iconSize: [20, 40],
  //   iconAnchor: [18, 18],
  //   popupAnchor: [0, -10],
  //   shadowAnchor: [10, 10],
  // });

  // const myfun = () => {
  //   setLat(lat + 0.00001);
  //   setLon(lon + 0.00001);
  //   setHeading(heading + 5);
  //   console.log("angle:" + heading);
  // };

  return (
    <>
      <MapContainer
        center={center}
        zoom={15}
        style={{ height: "100vh", width: "100vw" }}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=SVoUH8L1C9a9SG1IXtap"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
        <RoutingMachine />
          {/* <Marker position={[lat, lon]} icon={defaultIcon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker> */}
      </MapContainer>
    </>
  );
};

export default Simulation;

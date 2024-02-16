import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";


const createRoutineMachineLayer = (props) => {
    const instance = L.Routing.control({
        waypoints: [
            L.latLng(13.032887746681935, 80.23299688010245),
            L.latLng(12.751995657024581, 80.2033320954408)
          ],
          lineOptions: {
            styles: [{ colo: "#6FA1rEC", weight:4 }]
          },
          show: false,
          addWaypoints: false,
          routeWhileDragging: true,
          draggableWaypoints: true,
          fitSelectedRoutes: true,
          showAlternatives: false
    });
  
    return instance;
  };
  
  const RoutingMachine = createControlComponent(createRoutineMachineLayer);
  
  export default RoutingMachine;
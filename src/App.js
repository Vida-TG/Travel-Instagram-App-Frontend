import * as React from 'react';
import Map, {Marker} from 'react-map-gl';
import { Room } from "material-ui/icons";

function App() {
  const [viewState, setViewState] = React.useState({
    longitude: 2.294694,
    latitude: 48.858093,
    zoom: 4
  });

  return <Map
    {...viewState}
    onMove={evt => setViewState(evt.viewState)}
    style={{width: "100vw", height: "100vh"}}
    mapboxAccessToken={process.env.REACT_APP_MAPBOX}
    mapStyle="mapbox://styles/mapbox/streets-v9"
  >
  <Marker longitude={2.294694} latitude={48.858093} anchor="bottom" >
    <Room/>
  </Marker>
  </Map>;
}

export default App;

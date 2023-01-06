import * as React from 'react';
import Map from 'react-map-gl';

function App() {
  const [viewState, setViewState] = React.useState({
    longitude: 2.294694,
    latitude: 48.858093,
    zoom: 4
  });

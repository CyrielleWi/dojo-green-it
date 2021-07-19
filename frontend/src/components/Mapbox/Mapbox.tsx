import React from 'react';
import ReactMapGl from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import StyledMapbox from './Mapbox.style';

const MAP_STYLE = 'mapbox://styles/mapbox/streets-v10';

const Mapbox: React.FC = () => {
  return (
    <StyledMapbox>
      <ReactMapGl
        width={'50vw'}
        height={'50vh'}
        latitude={48.8827}
        longitude={2.3225}
        zoom={15}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle={MAP_STYLE}
      />
    </StyledMapbox>
  );
};

export default Mapbox;

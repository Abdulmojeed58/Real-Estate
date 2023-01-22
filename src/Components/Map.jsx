import React, { useState, useRef } from 'react';
import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';



// const MapContainer = () => {
//   const [data, setdata] = useState('');

//   const options = {
//     method: 'GET',
//     url: 'https://maptiles.p.rapidapi.com/es/map/v1/3/4/2.png',
//     headers: {
//       'X-RapidAPI-Key': 'e039675d13mshcbc9a408bc6e19ep162dffjsn218f67500e79',
//       'X-RapidAPI-Host': 'maptiles.p.rapidapi.com'
//     }
//   };

//   useEffect(() => {
//     axios.request(options).then(function (response) {
//       setdata(response.data);
//     }).catch(function (error) {
//       console.error(error);
//     });
//   }, []);

//   return (
//     <div style={{ height: '100vh', width: '100%' }}>
//       <div>{data}</div>
//     </div>
//   );
// }



export const MapTiles = () => {
  const [center] = useState({ lat: 9.0820, lng: 8.6753})
  const ZOOM_LEVEL = 5;
  const mapRef = useRef();

  return (
      <MapContainer center={center} zoom={ZOOM_LEVEL} style={{ height: "100%", width: "100%", borderRadius: '.5rem' }} ref={mapRef}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
  );
};




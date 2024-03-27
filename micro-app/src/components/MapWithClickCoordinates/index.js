import 'leaflet/dist/leaflet.css';
import React, {useState } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import "./index.css"

const MapWithClickCoordinates = () => {

  const [clickedLocation, setClickedLocation] = useState(null);

  const sendData = async (dataToSend) => {
    try {
      const response = await fetch('http://localhost:5000/api/receive_data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();
      console.log('Server response:', result);
      return result
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  const handleMapClick = async (event) => {
    const { lat, lng } = event.latlng;
    console.log(lat,lng)
    const {message}= await sendData({lat:lat,lng:lng})
    setClickedLocation([lat, lng,message]);
  };

  const locationIcon = new L.DivIcon({
    className: 'custom-div-icon',
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="30" viewBox="0 0 32 42"><path fill="rgba(255, 0, 0, 0.7)" d="M16 0C7.164 0 0 7.164 0 16c0 18 16 26 16 26s16-8 16-26C32 7.164 24.836 0 16 0zm0 24c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/></svg>`,
    iconSize: [15, 30],
    iconAnchor: [15, 30],
    popupAnchor: [15, 30],
    shadowSize: [15, 30],
  });


  return (
    <div>
      <p className='paragraph-intro'><strong>Click on the map to get the Predicted value of Micro-Plastic</strong></p>
      <MapContainer className='curved-border' center={[13.51, 77.63]} zoom={5} style={{ height: '70vh', width: '65vw' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a>'
        />
        <ClickHandler onMapClick={handleMapClick} />
        {clickedLocation && (
          <Marker position={clickedLocation} icon={locationIcon}>
            <Popup>
              Latitude: {clickedLocation[0]}<br />
              Longitude: {clickedLocation[1]}<br />
              Precited MP :  {clickedLocation[2]==="Not found"?"Not Found" :`${clickedLocation[2]} items/m^3`}
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

const ClickHandler = ({ onMapClick }) => {
  useMapEvents({
    click: onMapClick,
  });

  return null; 
};

export default MapWithClickCoordinates;

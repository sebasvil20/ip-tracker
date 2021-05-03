import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { MapContainerStyled } from './styles'
import {MarkerIcon} from './map-icon'
import 'leaflet/dist/leaflet.css'
import { useState } from 'react'

export const MapView = () => {
  const [position] = useState([6.247465148403925, -75.56748348672872])


  return (
    <MapContainerStyled>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={MarkerIcon}>
          <Popup>
            
        {`Your IP location`}
          </Popup>
        </Marker>
      </MapContainer>
    </MapContainerStyled>
  )
}

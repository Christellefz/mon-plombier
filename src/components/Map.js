import './Map.css'

import {
  GoogleMap,
  LoadScript,
  Marker,
  useJsApiLoader
} from '@react-google-maps/api'
import React, { useCallback, useState } from 'react'

const API_KEY = process.env.REACT_APP_MAP_KEY

// const containerStyle = {
//   width: '400px',
//   height: '400px'
// }

// const center = {
//   lat: 43.8073,
//   lng: 4.6437
// }
const location = { lat: 43.8073, lng: 4.6437 }
const Map = () => {
  //   const { isLoaded } = useJsApiLoader({
  //     id: 'google-map-script',
  //     googleMapsApiKey: API_KEY
  //   })

  //   const [map, setMap] = useState(null)

  //   const onLoad = useCallback(function callback(map) {
  //     const bounds = new window.google.maps.LatLngBounds()
  //     map.fitBounds(bounds)
  //     setMap(map)
  //   }, [])

  //   const onUnmount = React.useCallback(function callback(map) {
  //     setMap(null)
  //   }, [])

  //   return isLoaded ? (
  //     <div className='mapContainer'>
  //       <LoadScript >
  //         <GoogleMap
  //           mapContainerStyle={containerStyle}
  //           center={center}
  //           marker={Marker}
  //           zoom={1}
  //           onLoad={onLoad}
  //           onUnmount={onUnmount}
  //         >
  //           <Marker key={'myloc'} position={location} />
  //           {/* Child components, such as markers, info windows, etc. */}
  //           <></>
  //         </GoogleMap>
  //       </LoadScript>
  //     </div>
  //   ) : (
  //     <></>
  //   )
  const containerStyle = {
    width: '400px',
    height: '400px'
  }

  const center = {
    lat: 43.8073,
    lng: 4.6437
  }

  return (
    <div className='mapContainer'>
      <LoadScript googleMapsApiKey={API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <Marker key={'myloc'} position={location} />
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default Map

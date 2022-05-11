import React from 'react';

import { GoogleMap, LoadScript } from '@react-google-maps/api';

export default function Map() {

    const apiKey: string | undefined = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

    const containerStyle = {
        width: '400px',
        height: '400px'
    };

    const center = {
        lat: -3.745,
        lng: -38.523
    };

    return (
        <div className='w-full h-4/5'>
            <LoadScript
                googleMapsApiKey={`${apiKey}`}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                    { /* Child components, such as markers, info windows, etc. */}
                    <></>
                </GoogleMap>
            </LoadScript>
    
        </div>
      
    )
}

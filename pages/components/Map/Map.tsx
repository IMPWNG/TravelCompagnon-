import React from 'react';
import GoogleMapReact from 'google-map-react';

export default function Map() {
    


    return (
        <>
        <div className='w-full h-4/5'>
            <GoogleMapReact
                bootstrapURLkeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
      
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
            >
            </GoogleMapReact>
        </div>
        </>
    )
}

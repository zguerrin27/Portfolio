import React, { Component } from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const style = {
  width: '100%',
  maxWidth: '500px',
  height: '100%'
}

const containerStyle = {
  // position: 'relative',  
  position: 'absolute', 
  maxWidth: '500px',
  width: '100%',
  height: '100%'
}
 
export class MapComponent extends Component {
  render() {
    return (
      <Map
          google={this.props.google}
          zoom={8}
          style={style}
          containerStyle={containerStyle}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        >
          <Marker position={{ lat: 48.00, lng: -122.00}} />
        </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
})(MapComponent)
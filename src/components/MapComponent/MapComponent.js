import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapComponent extends Component {
  render() {
    return (
      // <Map 
      //   google={this.props.google} 
      //   zoom={14}
      //   // style={mapStyles}
      //   initialCenter={{ lat: 47.444, lng: -122.176}}
      //   >
 
      //   <Marker onClick={this.onMarkerClick}
      //           name={'Current location'} />
 
      //   {/* <InfoWindow onClose={this.onInfoWindowClose}>
      //       <div>
      //         <h1>{this.state.selectedPlace.name}</h1>
      //       </div>
      //   </InfoWindow> */}
      // </Map>
      <Map
          google={this.props.google}
          zoom={8}
          // style={mapStyles}
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
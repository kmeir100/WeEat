import React from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  (<GoogleMap
    defaultZoom={8}
    defaultCenter={{lat: 32.0853, lng: 34.7818}}
  >
    {props.isMarkerShown && <Marker position={{lat: -34.397, lng: 150.644}}/>}
  </GoogleMap>)
));


class Map extends React.Component {
  state = {
    isMarkerShown: this.props.isMarkerShown,
  }

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({isMarkerShown: true});
    }, 3000);
  }

  handleMarkerClick = () => {
    this.setState({isMarkerShown: false});
    this.delayedShowMarker();
  }

  render() {
    return (
      <MyMapComponent className="map"
                      isMarkerShown={this.state.isMarkerShown}
                      onMarkerClick={this.handleMarkerClick}
                      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCgtxZUekCAg5pGCh-lpncLT91Qpwk4TBU&v=3.exp&libraries=geometry,drawing,places"
                      loadingElement={<div style={{height: '100%'}}/>}
                      containerElement={<div style={{height: '600px', width: '80%', border: '1px solid black'}}/>}
                      mapElement={<div style={{height: '100%'}}/>}
      />
    );
  }
}

export default Map;

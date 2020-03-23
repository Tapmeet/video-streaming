import React from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
const Map = () => {
  const [address, setAddress] = React.useState('');
  React.useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW1pdDg2Mjc0IiwiYSI6ImNpdmNuYm5jbDAwYzIyd3RtNjJ4ZnJ1bjUifQ.pZ2fnO31inanx734kd-V8A';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 15,
      center: [-71.97722138410576, -13.517379300798098]
    });
    map.on('load', function () {
      map.addSource('museums', {
        type: 'vector',
        url: 'mapbox://mapbox.2opop9hr'
      });
      map.addLayer({
        'id': 'museums',
        'type': 'circle',
        'source': 'museums',
        'layout': {
          'visibility': 'visible'
        },
        'paint': {
          'circle-radius': 15,
          'circle-color': 'rgba(139,93,142,0.8)'
        },
        'source-layer': 'museum-cusco'
      });

      map.addSource('contours', {
        type: 'vector',
        url: 'mapbox://mapbox.mapbox-terrain-v2'
      });
      map.addLayer({
        'id': 'contours',
        'type': 'line',
        'source': 'contours',
        'source-layer': 'contour',
        'layout': {
          'visibility': 'visible',
          'line-join': 'round',
          'line-cap': 'round'
        },
        'paint': {
          'line-color': 'rgba(139,93,142,0)',
          'line-width': 1,
        }
      });
    });

    //var toggleableLayerIds = ['contours', 'museums'];

  });

  function handleChange(address) {
    setAddress(address);
  };

  function handleSelect(address) {
    //console.log(address)
    setAddress(address);
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .catch(error => console.error('Error', error));
  };
  return (
    <div className="map-warpper">
      <div className="row form-group">
        <div className="col-12 col-sm-12">
          <PlacesAutocomplete
            value={address}
            onChange={handleChange}
            onSelect={handleSelect}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div className="map-search">
                <input
                  {...getInputProps({
                    placeholder: 'Search Places ...',
                    className: 'location-search-input form-control',
                  })}
                />
                <div className="autocomplete-dropdown-container">
                  {loading && <div className="suggestion-item">Loading...</div>}
                  {suggestions.map(suggestion => {
                    const className = suggestion.active
                      ? 'suggestion-item--active'
                      : 'suggestion-item';
                    // inline style for demonstration purpose
                    const style = suggestion.active
                      ? { backgroundColor: '#eee', cursor: 'pointer' }
                      : { backgroundColor: '#ffffff', cursor: 'pointer' };
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}
                      >
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </div>
      </div>
      <div className="map" id="map">
      </div>
    </div>

  );
}
export default Map
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

const MapboxComponent = ({ lng, lat, zoom, onAddressChange, setLng, setLat, setZoom, radius }) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    // Set Mapbox access token
    mapboxgl.accessToken =
      'pk.eyJ1Ijoic2NsaXF1ZSIsImEiOiJjbGV2aTdqb3AwNTNjM3BudDZqN2sxaGk1In0.Qfq2Ii2tq4Yxj6i8k0h_OA';

    // Initialize Mapbox map with given props
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v8',
      center: [lng, lat],
      zoom: zoom
    });

    // Add fullscreen control to map
    map.addControl(new mapboxgl.FullscreenControl());

    // Initialize geocoder and add to map
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
    });
    map.addControl(geocoder);

    // Initialize draggable marker with red color
    const marker = new mapboxgl.Marker({
      color: '#FF0000',
      draggable: true
    });

    // Update circle layer with new coordinates
    const updateCircle = (lngLat) => {
      map.getSource('circle-source').setData({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [lngLat.lng, lngLat.lat]
        }
      });
    };

    // Function to convert meters to pixels at the maximum zoom level
    const metersToPixelsAtMaxZoom = (meters, latitude) =>
      meters / 0.075 / Math.cos((latitude * Math.PI) / 180);

    // Add circle layer to map when it loads
    map.on('load', () => {
      map.addSource('circle-source', {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [lng, lat]
          }
        }
      });

      map.addLayer({
        id: 'circle-layer',
        type: 'circle',
        source: 'circle-source',
        paint: {
          // Set circle radius based on given radius prop
          'circle-radius': {
            stops: [
              [0, 0],
              [20, metersToPixelsAtMaxZoom(radius, lat)]
            ],
            base: 2
          },
          'circle-color': 'rgba(0, 0, 255, 0.3)',
          'circle-stroke-width': 2,
          'circle-stroke-color': 'rgba(0, 0, 255, 1)'
        }
      });
    });

    geocoder.on('result', (e) => {
      onAddressChange.landmark(e.result.place_name);

      map.flyTo({
        center: e.result.center,
        zoom: 15
      });
      marker.setLngLat(e.result.center).addTo(map);
      updateCircle(e.result.center);
    });

    // Add event listener for when the user clicks on the map
    map.on('click', async (e) => {
      // Get the location data from Mapbox Geocoding API
      const res = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${e.lngLat.lng},${e.lngLat.lat}.json?access_token=${mapboxgl.accessToken}`
      );
      const data = await res.json();

      // Update the address information and coordinates in the parent component
      onAddressChange.landmark(data.features[0].place_name);
      onAddressChange.coordinates([data.query[0], data.query[1]]);

      // Update the marker and circle on the map
      marker.setLngLat(e.lngLat).addTo(map);
      updateCircle(e.lngLat);
    });

    // Add event listener for when the map moves
    map.on('move', () => {
      // Get the current center and zoom of the map
      const center = map.getCenter();
      const zoom = map.getZoom();
      const lng = center.lng.toFixed(4);
      const lat = center.lat.toFixed(4);

      // Update the state of the parent component with the new center and zoom values
      setLng(lng);
      setLat(lat);
      setZoom(zoom);
    });

    // Cleanup function to remove the map when the component unmounts
    return () => {
      map.remove();
    };
  }, [radius]);

  // Render the map container element
  return <div ref={mapContainer} style={{ height: '400px' }} />;
};

// Export the MapboxComponent as the default export of this module
export default MapboxComponent;

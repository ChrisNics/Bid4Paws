import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

const MapboxComponent = ({ lng, lat, zoom, onAddressChange, setLng, setLat, setZoom }) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1Ijoic2NsaXF1ZSIsImEiOiJjbGV2aTdqb3AwNTNjM3BudDZqN2sxaGk1In0.Qfq2Ii2tq4Yxj6i8k0h_OA';

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v8',
      center: [lng, lat],
      zoom: zoom
    });

    map.addControl(new mapboxgl.FullscreenControl());

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
    });

    map.addControl(geocoder);

    const marker = new mapboxgl.Marker({
      color: '#FF0000',
      draggable: true
    });

    geocoder.on('result', (e) => {
      onAddressChange.landmark(e.result.place_name);

      map.flyTo({
        center: e.result.center,
        zoom: 15
      });
      marker.setLngLat(e.result.center).addTo(map);
    });

    map.on('idle', function () {
      map.resize();
    });

    map.on('load', function () {
      map.resize();
    });

    map.on('click', async (e) => {
      const res = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${e.lngLat.lng},${e.lngLat.lat}.json?access_token=${mapboxgl.accessToken}`
      );
      const data = await res.json();
      onAddressChange.landmark(data.features[0].place_name);
      onAddressChange.coordinates([data.query[0], data.query[1]]);

      marker.setLngLat(e.lngLat).addTo(map);
    });

    map.on('move', () => {
      const center = map.getCenter();
      const zoom = map.getZoom();
      const lng = center.lng.toFixed(4);
      const lat = center.lat.toFixed(4);

      setLng(lng);
      setLat(lat);
      setZoom(zoom);
    });

    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapContainer} style={{ height: '400px' }} />;
};

export default MapboxComponent;

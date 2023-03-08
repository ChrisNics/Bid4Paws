import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

const RegistrationForm = () => {
  const mapContainer = useRef(null);
  const [lng, setLng] = useState(121.0529);
  const [lat, setLat] = useState(14.7483);
  const [zoom, setZoom] = useState(9);
  const [address, setAddress] = useState('');

  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1Ijoic2NsaXF1ZSIsImEiOiJjbGV2aTdqb3AwNTNjM3BudDZqN2sxaGk1In0.Qfq2Ii2tq4Yxj6i8k0h_OA';

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v8',
      center: [lng, lat],
      zoom: zoom
    });

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
      setAddress(e.result.place_name);
      map.flyTo({
        center: e.result.center,
        zoom: 15
      });
      marker.setLngLat(e.result.center).addTo(map);
    });

    map.on('click', async (e) => {
      const res = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${e.lngLat.lng},${e.lngLat.lat}.json?access_token=${mapboxgl.accessToken}`
      );
      const data = await res.json();

      setAddress(data.features[0].place_name);
      marker.setLngLat(e.lngLat).addTo(map);
    });

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });
  }, []);

  return (
    <div>
      <label>Address:</label>
      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      <div ref={mapContainer} style={{ height: '400px' }} />
    </div>
  );
};

export default RegistrationForm;

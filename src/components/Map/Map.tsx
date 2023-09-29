import React, { FC, useEffect } from 'react';  
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';  
import { fetchPlaceName, setCoordinates } from '../../store/reducers/mapSlice';
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';

const TOKEN = process.env.REACT_APP_TOKEN!;
mapboxgl.accessToken = TOKEN;

const Map: FC = () => {
    const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {  
    const map = new mapboxgl.Map({
      container: 'map',
      center: [  11.576124, 48.137154],
      zoom: 12,
      style: 'mapbox://styles/mapbox/streets-v11',
      hash: true,
    });
    map.on('click', (e)=>{
        dispatch(setCoordinates({ latitude: e.lngLat.lat, longitude: e.lngLat.lng }))
        dispatch(fetchPlaceName({ latitude: e.lngLat.lat, longitude: e.lngLat.lng }))
    })
    return () => {  
      map.remove();
    };
  }, [dispatch]); 

  return (
    <div className='map' id="map" style={{width: '80vw', height: '400px'}}> 
     
    </div>
  );
};

export default Map;
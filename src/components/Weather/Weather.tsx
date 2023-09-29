import React, { FC, useEffect } from 'react';
import { fetchCurrentWeather } from '../../store/reducers/weatherSlice';
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface WeatherProps{
    placeName: string | null;
}

interface WeatherState {
    temp: number | null;
    icon: string | null;
    text: string | null;
}

const Weather: FC <WeatherProps> = ({placeName}) => {

const dispatch = useDispatch<AppDispatch>();

const weather = useSelector((state: RootState)=> state.weatherSlice.weather)

console.log(weather);

const currentWeather: WeatherState = {
    temp: weather?.temp_c || null,
    icon: weather?.condition?.icon || null,
    text: weather?.condition?.text || null,
  };

    useEffect(() => {
        if (placeName) {
            dispatch(fetchCurrentWeather(placeName));
        }
    }, [placeName, dispatch]);

    if (!weather) {
        return <h1>Select a place on the map</h1>;
    }
    
    else {
      return <div> <Card sx={{width: '80vw' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ width: 150, height: 150 }}
          image={currentWeather.icon || undefined}
          alt={placeName || undefined}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {currentWeather.temp}
          </Typography>
          <Typography variant="body1" color="text.secondary">
          {placeName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {currentWeather.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </div>
      }

}
export default Weather;

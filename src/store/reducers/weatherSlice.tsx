import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type WeatherState = {
    weather: any | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: WeatherState = {
    weather: null,
    status: 'idle',
};

export const fetchCurrentWeather = createAsyncThunk(
    'weather/fetchCurrentWeather', 
    async (placeName: string) => {
        try {
            const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${placeName}`);
            console.log(`weather ${response.data.current}`)
            return response.data.current
        } catch (error: any) {
              console.log("Error", error.message);
            }
            return null;
        }
)
// 1b8ca1d4f2094f1da61141012231609
const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrentWeather.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCurrentWeather.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.weather = action.payload;
            })
            .addCase(fetchCurrentWeather.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default weatherSlice.reducer;
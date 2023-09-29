import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const TOKEN = process.env.REACT_APP_TOKEN;

const fetchPlaceName = createAsyncThunk('map/fetchPlaceName', 
async(coordinates: { latitude: number; longitude: number })=>{
    console.log(TOKEN)
    const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${coordinates.longitude},${coordinates.latitude}.json?access_token=${TOKEN}`
    );
    return response.data.features[3].text
});

const mapSlice = createSlice({
    name:'map',
    initialState:{
        latitude:null,
        longitude: null,
        placeName: null,
        status: 'idle',
    },
    reducers:{
        setCoordinates: (state, action)=>
        {
            state.latitude = action.payload.latitude;
            state.longitude = action.payload.longitude
        },
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchPlaceName.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchPlaceName.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.placeName = action.payload; 
          })
          .addCase(fetchPlaceName.rejected, (state) => {
            state.status = 'failed';
          });
    },
});
    
export const {setCoordinates} = mapSlice.actions;
export { fetchPlaceName };
export default mapSlice.reducer;
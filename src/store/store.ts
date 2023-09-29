import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mapSlice from './reducers/mapSlice'
import weatherSlice from './reducers/weatherSlice'


const rootReducer = combineReducers({
    mapSlice,
    weatherSlice
}

)

export const setupStore = ()=>{
    return configureStore({
        devTools: true,
        reducer: rootReducer,})
    }
export type RootState = ReturnType<typeof rootReducer>;

export type RootStore = ReturnType<typeof setupStore>;

export type AppDispatch = RootStore['dispatch'];
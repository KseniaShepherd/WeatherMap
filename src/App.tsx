import './App.css'; 
import Map from "./components/Map/Map";
import React, { FC} from 'react';
import Weather from "./components/Weather/Weather";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

const App: FC =()=> {
  const placeName = useSelector((state: RootState)=> state.mapSlice.placeName)
  return (
    <div className="App">
      <Map />
      <Weather placeName={placeName}/>
    </div>
  );
}

export default App;

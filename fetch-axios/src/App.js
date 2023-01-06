import { useState,useEffect } from 'react';
import './App.css';
import Axios from "./Axios"
import Axios2 from "./Axios2"
import Fetch from "./Fetch"
import Fetch2 from "./Fetch2"
function App() {


return (
   <div className="App">


 {/*
 
  <Axios/>
 
  */}
  <Fetch/>
  <Axios/>
  <Fetch2/>
  <Axios2/>


   </div>
  );
}

export default App;

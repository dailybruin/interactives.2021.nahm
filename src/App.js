import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Grid1 from "./components/Grid1";
import OurGrid from "./components/Grid1";

function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("<TODO: insert api url here>")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  return (
    // <div className="App">
    //   Hello Daily Bruin!
    // </div>
    <Grid1/>
  );
}

export default App;

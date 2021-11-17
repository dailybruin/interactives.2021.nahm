import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import grid1 from './components/grid1.js';

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
    grid1
  );
}

export default App;

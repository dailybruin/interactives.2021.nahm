import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';

import PictureCaptioned from './components/PictureCaptioned'

function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("<TODO: insert api url here>")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  return (
    <div className="App">
      Hello Daily Bruin!
      <PictureCaptioned src={"logo.svg"} caption={"caption goes here"}></PictureCaptioned>
    </div>
  );
}

export default App;

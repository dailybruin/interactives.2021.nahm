
import React, { useState, useEffect } from "react";
import './App.css';
import Grid1 from "./components/Grid1";
import Grid2 from "./components/Grid2";
import Grid3 from "./components/Grid3";
import styled from "styled-components";
import Landing from "./components/Landing";
import Editor from "./components/Editor";
import Header from "./components/Header";
import { mediaQueries } from './shared/config';

const Container = styled.div`
padding: 10px 100px 10px 100px;
background-color: yellow;
${mediaQueries.tablet}{
  padding: 10px 40px 10px 40px;
}
`


function App() {
  const media = window.matchMedia('(max-width: 450px)');
  const [isMobile, setIsMobile] = useState(media.matches);
  media.addEventListener('change', () => {
  if (media.matches !== isMobile) {
      setIsMobile(media.matches);
  }
  });

  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("<TODO: insert api url here>")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])


  return (

    <div className="App">
      <Header />
      <Landing/>
      
    <>
     <Container>
        <Editor />
        <Grid2/>
        <Grid3 twoOnRight/>
        <Grid3/>
    </Container>
    </>
    
    </div>

  );
}


export default App;

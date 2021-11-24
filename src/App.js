
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
  background-image: linear-gradient(#a66663 0%, #bf9786 25%, #deb969 50%, #448db6 75%);
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
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/interactives.2021.nahm/")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  console.log(data);
  return (
    (data &&
      <div className="App">
      <Header />
      <Landing src={data['landing_image']} creds={data['landing_credits']}/>
      
    <>
     <Container>
        <Editor title={data['editor_note_title']} text={data['text']} />
        <Grid2 data={data.first_grid}/>
        <Grid3 twoOnRight data={data.second_grid}/>
        <Grid3 data={data.third_grid}/>
    </Container>
    </>
    
    </div>
      
      
    )

  );
}


export default App;

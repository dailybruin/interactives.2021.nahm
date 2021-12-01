
import React, { useState, useEffect, useRef, useCallback } from "react";

import './App.css';
import Grid1 from "./components/Grid1";
import Grid2 from "./components/Grid2";
import Grid3 from "./components/Grid3";
import styled from "styled-components";
import Landing from "./components/Landing";
import Editor from "./components/Editor";
import Header from "./components/Header";
import { mediaQueries } from './shared/config';

import fb from './images/socials/fb.svg'
import insta from './images/socials/Vector.svg'
import twitter from './images/socials/Vector-1.svg'
import tiktok from './images/socials/Subtract.svg'
import email from './images/socials/Subtract-1.svg'

const Container = styled.div`
  padding: 10px 100px 10px 100px;
  background-image: linear-gradient(#a66663 0%, #bf9786 25%, #deb969 50%, #448db6 75%);
  ${mediaQueries.tablet}{
    padding: 10px 40px 10px 40px;
  }
`
const Footer = styled.div`
	background-color: #4A4D55;
	height: auto;
	color: white;
	padding: 60px 0 10px 0;
  text-align: center;
	h1 {
		margin: 0;
		font-family: 'Times New Roman', Times, serif;
    font-size: 30px;
	}
  /* margin-bottom: 20px; */
`


const Socials = styled.div`
  position: relative;
	margin-top: 20px;
  
	img {

    position: relative;
		margin: 0 20px;
	}
	p {
    position: relative;
		margin: 80px 20px;
		${mediaQueries.mobile} {
			margin: 50px 20px;
		}
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

  let myRef = useRef(null);
  const [firstTime, setFirstTime] = useState(true);
  const scroller = useCallback(() => {
    setTimeout(() => {
      if (myRef && myRef.current) {
        myRef.current.scrollIntoView({behavior: 'smooth'})
        setFirstTime(false)
      }
    }, 5500)
  }, [myRef])

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
      { !isMobile && <Landing src={data['landing_image']} creds={data['landing_credits']}/>}
      { isMobile && <Landing src={data['landing_image_mobile']} creds={data['landing_credits_mobile']}/>}
      <div ref={myRef}>
      <>
        <Container>
        { firstTime ? scroller() : null }
            <Editor title={data['editor_note_title']} text={data['text']} />
            <Grid2 data={data.first_grid}/>
            <Grid3 twoOnRight data={data.second_grid}/>
            <Grid3 data={data.third_grid}/>
            
        </Container>
        <Footer>
            <h1>DAILY BRUIN</h1>
            <Socials>
              <a href="https://www.instagram.com/dailybruin" target="_blank"><img src={insta}/></a>
              <a href="https://www.facebook.com/dailybruin" target="_blank"><img src={fb}/></a>
              <a href="https://www.twitter.com/dailybruin" target="_blank"><img src={twitter}/></a>
              <a href="https://www.tiktok.com/@dailybruin" target="_blank"><img src={tiktok}/></a>
              <a href="http://eepurl.com/cFEiZX" target="_blank"><img src={email}/></a>
              <p>Built with Suzy’s ♥ in Kerckhoff 118 by Sunny Li, Aritra Mullick and Janis Chen. Special thank you to Danna Castro Galindo for advising. Designed by Trisha Patel.</p>
            </Socials>
        </Footer>
      </>
      </div>
    
    
    </div>
      
      
    )

  );
}


export default App;

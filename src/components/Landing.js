import React from 'react';
import styled from 'styled-components';
//import landingpage from "../images/landingpage.png";


const Box = styled("div")`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  /* add background image details */
  background-image: url(${props=>props.src});
  background-position: center;
  background-size: cover;
  position: relative;
`;

const Credits = styled("div")`
  position: absolute;
  bottom: 20px;
  right: 50px;
  color: black;
  font-weight: bold;
`;

export default function Landing(props) {
    console.log(props.src);
    return (
        <Box src={props.src}>
            <Credits> {props.creds} </Credits>
        </Box>
    )
}

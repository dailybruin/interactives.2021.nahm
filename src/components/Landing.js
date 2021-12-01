import React from 'react';
import styled from 'styled-components';
//import landingpage from "../images/landingpage.png";
import { mediaQueries } from '../shared/config';


const Box = styled("div")`
  width: 100%;
  height: 98vh;
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

  ${mediaQueries.tablet}{
    right: 0px;
    font-size: 12px;
    bottom: 8px;
  }
`;

export default function Landing(props) {
    console.log(props.src);
    return (
        <Box src={props.src}>
            <Credits> {props.creds} </Credits>
        </Box>
    )
}

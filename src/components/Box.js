import React from "react";
import styled from "styled-components";

const CoolBox = styled("div")`
  display: flex;
  flex-direction: 'column';
  /* border: 1px solid black; */
  width: 500px;
  height: 200px;
  
  `;
const RightSide = styled("div")`
  width: 50%;
  /* border: 1px solid black; */
  margin: 5px;
  padding: 5px;
  `
const LeftSide = styled("div")`
  width: 50%;
  /* border: 1px solid black; */
  background: rgb(209,170,90);
  font-family: 'Roboto', sans-serif;
  color: white;

  margin: 5px;
  padding: 5px;
`

export default function Box(props){
  return (
    <>
    {/* <div className="borderbox"> */}
      <CoolBox>
      <LeftSide>
      jfklsdj 
      </LeftSide>
      <RightSide>
      jfklsdj 
      </RightSide>

      </CoolBox>
    {/*  </div> */}

    </>
  )
}
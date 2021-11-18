import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import './App.css'
import Landing from "./components/Landing"
import Editor from "./components/Editor"
import Header from "./components/Header"


function App() {
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
      <Editor />
    
    </div>
  );
}


export default App;

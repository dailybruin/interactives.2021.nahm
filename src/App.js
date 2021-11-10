import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import ArticleLayout1 from './components/ArticleLayout1'

function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("<TODO: insert api url here>")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  return (
    <div className="App">
      <ArticleLayout1/>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import './App.css';
import Grid2 from "./components/Grid2";
import Grid3 from "./components/Grid3";

function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("<TODO: insert api url here>")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  return (
    <>
     <div className="App">
       Hello Daily Bruin!
     </div>
    {/* <Grid2/> */}
    <Grid3/>
    </>
  );
}

export default App;

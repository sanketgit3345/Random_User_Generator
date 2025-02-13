import './App.css';
import React, { useEffect, useState } from 'react';
import Api from './api';
import { Card } from './components/card';

function App() {

  const [data,setData]=useState(null);
  
   useEffect(()=>{
    Api().then((posts)=>setData(posts))
   },[])
   
   function refresh(){
    Api().then((posts)=>setData(posts))
   }
   

  return (
    !data? <div>No data</div>:
    <div className="App">
      <Card Fname={data.results[0].name.first} Lname={data.results[0].name.last} email={data.results[0].email} pic={data.results[0].picture.large}/>
      <button className="btn" onClick={refresh}>Refresh</button>
    </div>
  );
}

export default App;

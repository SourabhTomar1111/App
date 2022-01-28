import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'


const App = ()=> {
  const pageSize = 5;
 
  const [progress, setProgress] = useState(0)

  return (
    <div>
      
    {/*use router next time for this i have given all category remainder... */}
   
      <NavBar/> 
      <LoadingBar height={3} color='#f11946'  progress={progress} />
      
     <News setProgress={setProgress}  key="general" pageSize={pageSize} country="in" category="general"/>
       <News setProgress={setProgress}  key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>
       <News setProgress={setProgress}  key="sports" pageSize={pageSize} country="in" category="sports"/>
       <News setProgress={setProgress}  key="science" pageSize={pageSize} country="in" category="science"/>
       <News setProgress={setProgress}  key="business" pageSize={pageSize} country="in" category="business"/>
       <News setProgress={setProgress}  key="health" pageSize={pageSize} country="in" category="health"/>
       <News setProgress={setProgress}  key="technology" pageSize={pageSize} country="in" category="technology"/>
     
       
      </div>
    )
  }


export default App; 

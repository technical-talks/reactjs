import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  const[mode,setMode]=useState('light')
  const[alert,setAlert]=useState('null')

  const showAlert=(message,type)=>{
    
    setAlert(
      {msg:message,
    type:type,
      }
    );
  }

   setTimeout(() => {
    setAlert(null);
  }, 3000);
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-primary')
  }

  const toggleMode=(cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if(mode==='light')
        {setMode('dark')
        document.body.style.backgroundColor='#032b47';
      showAlert("dark mode enable","successfully");
      document.title='TextUtils-Dark Mode';}


    else
      { setMode('light')   
      document.body.style.backgroundColor='white';
      showAlert("light mode enable","successfully");
      document.title='TextUtils-Light   Mode';}

  }
  return (
    <>
    <Router>
      <Navbar title="Ayush" aboutText="About Us"   mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar  />      --- ye sirf chalane se default prop apne ap title and about default wala de dega */}

      {/* textform ko center ke live div.container kardo bootstrap class hoti h beech me le ayega  */}
      {/* container me my-3 means bootsrap ki hoti h margin  de degi y me    3 ki */}
      
      <Alert  alert={alert} mode={mode}/>
      {/* https://v5.reactrouter.com/web/guides/quick-start  react router quick start se router lelo about pe click kare home pe click without loaing jaha jaha a,href waha waha link ,to kardo it will work without load ... */}

      {/* npm install react-router-dom first ye terminal karo then router in code me lagao  */}
      


     
      <div className="container my-3" >
        {/* <TextForm showAlert={showAlert} heading="Enter the Text to analyze below" mode={mode} toggleMode={toggleMode}/> */}
      <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route> 
            
            {/* <Route exact path="/"> */}
            <TextForm showAlert={showAlert} heading="Enter the Text to analyze below" mode={mode} toggleMode={toggleMode}/>
            {/* </Route> */}
     </Switch>
      </div>
     
      {/* // <div className="container">
      //   <About/>
      // </div>  */}
      
    </Router>
    </>
  );
}

export default App;

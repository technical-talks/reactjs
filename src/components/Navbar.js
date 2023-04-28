import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';


export default function Navbar(props) { 
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">   isme classname wala we take in {``} in java script with curly bracket
    //  ${} use karenge prop in javascript 
    <nav className={`  navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `} >
        <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
          
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    
                </li>
                <li className="nav-item">
                    <a className="nav-link active"  aria-current="page" href="/about">{props.aboutText}</a>
                     
                </li>
                
                </ul>

                <div className="d-flex">
                    <div className="bg-primary rounded mx-2 " onClick={()=>{props.toggleMode('primary')}} style={{height:'30px' ,width:'30px', cursor:'pointer'}}></div>
                    <div className="bg-danger rounded mx-2 " onClick={()=>{props.toggleMode('danger')}} style={{height:'30px' ,width:'30px', cursor:'pointer'}}></div>
                    <div className="bg-success rounded mx-2 " onClick={()=>{props.toggleMode('success')}} style={{height:'30px' ,width:'30px', cursor:'pointer'}}></div>
                    <div className="bg-warning rounded mx-2 " onClick={()=>{props.toggleMode('warning')}} style={{height:'30px' ,width:'30px', cursor:'pointer'}}></div>
                </div>
                {/* <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}


                {/* THIS IS SWITCH BUTTON CODE:- */}
                {/* switch bootstrap me text-color(text-dark) ki class hoti h  ,  jaha jaha for  it will be htmlfor */}
                {/* <div className="form-check form-switch  text-dark"> */}
                <div className={`form-check form-switch  text-${props.mode==='light'?'dark':'light'}`}>
                    <input className="form-check-input" type="checkbox"  onClick={()=>{props.toggleMode(null)}} role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toogle Mode</label>
                </div>
            </div>
        </div>
    </nav>
  )
}
Navbar.propTypes={title:PropTypes.string.isRequired,
                  aboutText:PropTypes.string.isRequired
                }
Navbar.defaultProps={
    title:'set title here',
    aboutText:'about text here'
}                




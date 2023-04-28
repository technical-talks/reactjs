// import React, { useState } from 'react'
import React from 'react'






export default function About(props) {

    // const[myStyle,setMyStyle]=useState({

    //     // html me style background-color likhte the but in javascript all will be in 
    //     // camel casing using in javascript and react  backgroundColor
    //     backgroundColor:"white",
    //     color:"black"
    // })


    let myStyle={
        color:props.mode==='dark'?'white':'black',
        backgroundColor: props.mode==='dark'?'black':'white'
    }
    // const[btntext,setBtnText]=useState("enable dark mode")

    // const toggleStyle=()=>
    // {
    //     if(myStyle.color==="black")
    //     {
    //         setMyStyle({
    //             color:"white",
    //             backgroundColor:"black"
    //         })
    //         setBtnText("enable light mode");
    //     }
    //     else{
    //         setMyStyle({
    //             color:"black",
    //             backgroundColor:"white"
    //         })
    //         setBtnText("enable dark mode");
    //     }
    // }

    
  return (
    <div className="container" style={myStyle}>
      <h1 className="my-2 mx-3">About us</h1>  
      <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Analyze Your Text
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    Textutils give you a way to analyze your text quickly and efficiently. Be it word count, character count or 
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Free To Use
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    TextUtils is a free character counter tool that provide instant character count and word count statistics for a given text. TextUtils reports the number of words and character. Thus it is suitable for writing text with word/character limit.    
                </div>
                </div>
            </div>
            <div className="accordion-item" >
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Browser Compatible
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera.
                        It suits to count characters in facebook, blog, books, excel, document, pdf document, essays, etc.
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="container">
            <button type="button" className="btn btn-primary my-1 mx-2" onClick={toggleStyle}>{btntext}</button>
        </div> */}
    </div>
  )
}

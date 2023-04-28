// rfc-- react ka function wala code
// pts- prop type string
// coomand+f- replace the word from whole para all words get replace 
// app.js me jab <TextForm> likhnenge to / bhi lagana padega <TextForm />
// tab se seleced para we move 
// https://create-react-app.dev/docs/deployment isse react me bna ye project git pe live kara jayega.- npm install gh-pages karenge and all 

import React ,{useState} from 'react'

//  ye useState is a hook in react 
export default function TextForm(props) {

//   lower ko upper ke liye kaam kar raha h function
    const handleUpClick=()=>{
        // console.log("uppercase was clicked  "+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("convert to UPPER CASE","successfully");
    }
    const handleLoClick=()=>{
      // console.log("uppercase was clicked  "+text);
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("convert to lower case ","successfully");
  }
  const handleClearClick=()=>{
    let newText=" ";
    setText(newText);
  }
  const handleCopy=()=>{
    var text=document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied to clipboard","successfully");
  }

  const handelExtraSpaces=()=>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("removed extra spaces ","successfully");

  } 
//      event lagake ander to ye type lene lagega text me input lene laga aur jo bhi changes karte to set text se modify karne laga 
//  jab  bhi kuch type karna ho to onchange banaoo and jese jese change karenge onchnge ata rahega console me 
    const handelOnChange=(event)=>{
        // console.log("on change");
        setText(event.target.value);
    }
    const[text,setText]=useState('')
    // text="new text"; wrong way to change text
    // setText("new text"); correct way to change text
  return (  
    <>
    {/*  color ye text color h style me  */}
    <div className="container " style={{ color:props.mode==='light'?'black':'white'}}>  
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handelOnChange}  style={{backgroundColor: props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}}  id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary my-3  mx-1" onClick={handleUpClick}>Switch to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={handleLoClick}>Switch to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={handleClearClick}>Switch to Clear</button>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={handleCopy}>Copy</button>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={handelExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3 " style={{ color:props.mode==='light'?'black':'white'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").filter((ele)=>{return ele.length!==0}).length} words and {text.length} characters</p> 
      <p>{text}</p> 
    </div>
    </>
  )
}


import React, {useState} from "react";

export default function Textarea(props) {

  // step -1 ....[useState] ko (lineNo-2) me import karne ke baad hm log lineNo-18 ko likhenge
//es line se text ke ander default value aa jayega(enter text here) ur jab hmme default value ko change kaena hoga to hmlogo ko (setText()) function ke help se change kae sakte hai
const [text , setText] =useState('');

//step-2..... lineNo-7 ke help se hmlog buttom wale onClick pe event laga rhe hai , button ko click karte hi textArea ka value change ho jayega(setText function) ke help se 
    const convertuppercase=()=>{
        let newText= text.toUpperCase();
        setText(newText)
    }

    const convertlowercase=()=>{
        let newText=text.toLowerCase();
        setText(newText)
    }

    const handleClearText=()=>{
      let newText=" ";
      setText(newText)
  }



//step-3....lineNo-12 ke help se textArea e event lagane ke baad bhi hm log textArea me kuchh bhi likh skte hai (ese use nhi karta to textArea me kuchh bhi nhi likh pata)
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }


  return (
    <div className="container"> 
        <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="my-Box"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={convertuppercase}>convert To UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={convertlowercase}>convert To LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear All Text</button>

    <div className="container my-4">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <p>{text}</p>
    </div>
    </div>
  );
}

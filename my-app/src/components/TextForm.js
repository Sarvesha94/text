import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked" + text); you can add this line or can not no need
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Convert to upper-case!!", "success");

    }
    const handleLoClick=()=>{
      // console.log("Uppercase was clicked" + text); you can add this line or can not no need
      let newText= text.toLowerCase();
      setText(newText)
      props.showAlert("Convert to lower-case!!", "success");

  }
  const handleClearClick=()=>{
    // console.log("Uppercase was clicked" + text); you can add this line or can not no need
    let newText= '';
    setText(newText)
    props.showAlert("Clear text!!", "success");

}

    const handleOnChange=(event)=>{
        // console.log("On change");also no need your wish

        setText(event.target.value)
    }
    // const handleCopy=()=>{
    //   console.log("I am copy");
    //   var text=document.getElementById("myBox");
   
    //   text.select();
    // text.setSelectionRange(0,9999);
    //   navigator.clipboard.writeText(text.value);
    // }

    

    const[text,setText]= useState('Enter text here');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
  {/* <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> */}
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white', color:props.mode ==='dark'?'white':'#042743' }} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}> Convert to uppercase </button> 
<button className="btn btn-primary mx-1" onClick={handleLoClick}> Convert to lowercase </button> 
<button className="btn btn-primary mx-1" onClick={handleClearClick}> Clear text </button> 
{/* <button className="btn btn-primary mx-1" onClick={handleCopy}> Copy text </button>  */}


    </div>
    <div className="container my-3"  style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008* text.split(" ").length} Minutes read</p>
        <h2>Preivew</h2>
        <p>{text.length>0?text:"Enter somrthing in the textbox to preview it here"}</p>
    </div>
    </>
  )
}

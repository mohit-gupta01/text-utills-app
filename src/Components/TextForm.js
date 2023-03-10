import React, {useState} from 'react'

export default function TextForm(props){
  const handleUpClick= ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", 'success');
  }
  const handleLowClick= ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", 'success');
  }
  const handleClearClick= ()=>{
    let newText = '';
    setText(newText);
  }
  const handleOnChange= (event)=>{
    setText(event.target.value);
  }
  const handleCopy=()=>{
    var text=document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpaces=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const [text, setText] = useState('');
  
  return (
    <>
    <div className="container"  style={{color: props.mode ==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'black':'white', color: props.mode ==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      

    </div>
    <div className="container my-3" style={{color: props.mode ==='dark'?'white':'black'}}>
      <h2>Your text Summary</h2>
      <p>{(text.split(" ").length)+(text.split('\n')[text.split('\n').length-1]===''?text.split('\n').length-1:text.split('\n').length)-1} words and {text.length} characters.</p>
      <p>{0.008 * text.split(" ").length} Minutes read.</p>
      <p>{text.split('\n')[text.split('\n').length-1]===''?text.split('\n').length-1:text.split('\n').length} paragraphs</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter something in the above textbox to preview it here.'}</p>
    </div>
    </>
  )
}
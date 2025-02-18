import React,{useState} from "react";

export default function Textform(props) {
    const [text , setText] = useState('enter text here');
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const handleOnChange =(event)=>{
      const inputValue = event.target.value 
        setText(inputValue)
        // check if sentence conatiner number
        const containerNumber = /\d/.test(inputValue)
        setIsButtonEnabled(containerNumber)
    }
    const handleOnClickUpperCase=()=>{
        const newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnClickLowerCase = () => {
      const newText = text.toLowerCase();
      setText(newText);
    };
    const handleOnClickExtractNumber =() =>{
      const newText = text.match(/\d+/g);
      if (newText) {
        setText(newText[0]);
        setIsButtonEnabled(true);
      } else {
        setText('');
        setIsButtonEnabled(false);
      }
    }

  return (
    <>
      <div className="container">
        <div className="my-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
       
        <button className="btn btn-primary me-2" onClick={handleOnClickUpperCase}>
          convert to Uppercase
        </button>
        <button className="btn btn-primary me-2" onClick={handleOnClickLowerCase}>
          convert to Lowercase
        </button>
        <button className="btn btn-primary me-2" onClick={handleOnClickExtractNumber} disabled={!isButtonEnabled}>
          extract number 
        </button>
      </div>
      <div className="container my-3">
        {text.split(" ").length}words, & {text.length}characters
      </div>
      <div className="container">
        <p>{text}</p>
      </div>
    </>
  );
}

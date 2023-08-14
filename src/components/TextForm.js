import React, { useState } from 'react';

function TextForm(props) {



    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase","success");

    }

    const handleClear = () => {
        let newText = " "
        setText(newText);
        props.showAlert("Text Cleared","success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);

    }


    const handleSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Cleared spaces","success");
    }
    const [text, setText] = useState(' ');

    return (
        <>
            <div className="container" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>


                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="Mybox" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>

            <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleSpaces}>Clear Spaces</button>
        </div >
            <div className="conatiner my-3" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length}</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Previw</h3>
                <p>{text.length>0?text:'enter something to preview it from above'}</p>
            </div>
        </>
    );
}

export default TextForm;

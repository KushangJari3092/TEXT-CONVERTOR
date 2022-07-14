import React, { useState } from 'react'

export default function Textform(props) {

    const [text, setText] = useState('');   //hooks - defalut value of text is nothing
    const [converted, setConverted] = useState('')

    const convertHandler = (e) => {
        e.preventDefault()
        // console.log("lower to upper clicked ");
        // const s = text;
        const n = text?.toUpperCase();
        setConverted(n);
    }

    // const changehandler = (event) => {      //takes {text} as argument
    //     console.log("onchange clicked");
    //     setText(event.target.value);
    // }

    const copyHandler = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(text);
        console.log(text);
        alert("text copied");
    }
    const clearHandler = (e) => {
        e.preventDefault();
        setText("");
        setConverted('');
    }
    // setText("new");
    // console.log('props :>> ', props.heading);
    return (
        <>
            <div>
                <form className="container my-4">
                    <h2 id='1' className='h2'>{props?.heading}</h2>
                    <div className="mb-3">

                        <textarea className="form-control" id="myBox"
                            value={text} placeholder="enter text here" rows="5"
                            onChange={(e) => { setText(e?.target?.value); }}></textarea>
                    </div>

                    <button className='btn btn-primary my-2' onClick={convertHandler} disabled={text?.length === 0}>Convert</button>

                    <button className='btn btn-primary mx-2 my-2' onClick={copyHandler} type disabled={text?.length === 0}>Copy</button>

                    <button className='btn btn-primary my-2' onClick={clearHandler} disabled={text?.length === 0}>Clear</button>
                </form>
            </div>

            <div className="container my-3">
                <h2 id='2' className='h2' >Converted Text</h2>
                <form>
                    <div className="mb-3">
                        <textarea className="form-control" id="converted"
                            value={converted} placeholder="" rows="5"></textarea>
                        <button className='btn btn-primary my-4' type="button"
                            onClick={() => { navigator.clipboard.writeText(converted); alert("text copied"); }} disabled={converted?.length === 0}>Copy</button>
                    </div>
                </form>
            </div>

            <div className="container my-5">
                <h2 id='3' className='h2'>Text Summary</h2>
                {/* <h2 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>text summary</h2> */}
                <p id='summ'>{text?.split(" ").filter((element) => { return (element.length !== 0) }).length} words, {text?.length} characters</p>
            </div>



        </>
    )
}

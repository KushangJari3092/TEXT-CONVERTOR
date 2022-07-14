import React, { useState } from 'react'
import "../styles/App.css";


const About = () => {

    // const [myStyle, setmyStyle] = useState({    //default
    //     border: "2px solid  ",
    //     padding: "20px",
    //     backgroundColor: "white"
    // })

    const [mode, setMode] = useState('dark');//default button text

    const toggleStyle = () => { //to change mode (dark <--> light)
        if (mode == "dark") {
            // setmyStyle({
            //     backgroundColor: "black",
            //     padding: "20px",
            //     borderRadius: "15px",
            //     // color: "white"
            // })
            // document.getElementById("txt").innerHTML = "Enable light mode";
            setMode('light')
        }
        else {
            // setmyStyle({
            //     padding: "20px",
            //     backgroundColor: "white"
            // })
            // document.getElementById("txt").innerHTML = "Enable dark mode";
            setMode('dark')
        }
    }
    console.log('Hello :>>');
    return (

        <div className={`container my-4 rad ${mode === 'dark' ? 'light' : 'dark'}`}>
            <div className="my-2 mx-2 pt-4 pb-4">

                <div className="alert alert-primary" role="alert">
                    A simple primary alert—check it out!
                </div>

                <div className="alert alert-danger" role="alert">
                    A simple danger alert—check it out!
                </div>
                <div className="alert alert-warning" role="alert">
                    A simple warning alert—check it out!
                </div>
                <div className="alert alert-secondary" role="alert">
                    A simple danger alert—check it out!
                </div>
                <button type="button" className="btn btn-secondary" onClick={toggleStyle}>Enable {mode} mode</button>
            </div>



        </div>

    )
}

export default About;

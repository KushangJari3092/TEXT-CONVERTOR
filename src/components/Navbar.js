import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    //for light<-->dark mode switch
    const [switchMode, setswitchMode] = useState(props.mode)       //for backgroud color

    // console.log('switchmode :>> ', switchMode);

    const togglemode = () => {      //for text color
        if (switchMode === "light") {
            console.log('heloo dark :>> ');
            setswitchMode('dark');

            document.body.style.backgroundColor = "#040632";
            document.getElementById('1').style.color = "white";
            document.getElementById('2').style.color = "white";
            document.getElementById('3').style.color = "white";
            document.getElementById('summ').style.color = "white";

        }
        else {
            setswitchMode('light');

            document.body.style.backgroundColor = "#e5e5ea";
            document.getElementById('1').style.color = "black";
            document.getElementById('2').style.color = "black";
            document.getElementById('3').style.color = "black";
            document.getElementById('summ').style.color = "black";

        }

    }

    return (
        <div className={` ${switchMode === 'light' ? 'modeThemeDark' : 'modeThemeLight'}`}>
            <nav className={`navbar navbar-expand-lg bg-${switchMode} `}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <h3>{props.title}</h3>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/form">
                                    Form
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className={`custom-control custom-switch`}>
                        <input type="checkbox" className="custom-control-input" id="customSwitches" onClick={togglemode} />
                        <label className="custom-control-label" htmlFor="customSwitches" >
                        Enable {switchMode === 'dark' ? 'light' : 'dark'} mode</label>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar;



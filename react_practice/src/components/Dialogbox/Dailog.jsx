import React from "react"
import './dialog.css'
import { useState } from "react"

function Dialog(){

    const[dialog,setdialog]=useState(false)

    return (
        <div>
            <button id='open-btn' onClick={()=>setdialog(true)}>Open Dialog box</button>
            <div>{dialog ?<div className="container-dialog">
                <h2>Congrats</h2>
                <p>You have successfully opened the dialog box</p>
                <button id='close-btn' onClick={()=>setdialog(false)}>Close</button>
            </div> : ""}
            </div>
        </div>
    )
}

export default Dialog;
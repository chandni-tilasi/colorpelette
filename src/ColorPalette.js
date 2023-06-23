import React, { useState } from 'react'
import "./App.css"
function ColorPalette() {
    const colors = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "indigo",
        "violet",
        "purple",
        "pink",
        "magenta",
        "brown",
        "gray",
        "black",
        "white",
        "silver",
        "gold",
        "cyan",
        "turquoise",
        "teal",
        "lime",
        "olive",
        "maroon",
        "navy",
        "coral"
       
    ]

    const [selected, unSelected] = useState("");
    const clickHandle = (color) => {
        unSelected(color)
    }
    return (
        <div className='container'>
            <div className='colorContainer'>
                {
                    colors.map((color) => {
                        return <li key={color} style={{ backgroundColor: (selected === color) ? selected : "" }} onClick={() => {
                            clickHandle(color)
                        }} className='colors' > {color} </li>
                    })
                }
            </div>
        </div>

    )
}

export default ColorPalette
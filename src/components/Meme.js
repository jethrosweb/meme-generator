import React from "react"
import memesData from "../memesData"

export default function Meme() {

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
    }

    return (
        <main>
            <div className="meme--form">
                <input type="text" placeholder="Top text" className="meme--inputs" />
                <input type="text" placeholder="Bottom text" className="meme--inputs" />
                <button onClick={getMemeImage} className="meme--button">Get a new meme image 🖼</button>
            </div>
        </main>
    )
}

/* 
Hanging state quiz:

1. You have 2 options for what you can pass in to a state setter function (e.g. 'setCount'). What are they? 
A: Callback function or new value of state. 

2. When would you want to pass the first option (form answer above) to the state setter function? 
A: When using the intial useState value to calculate the new state value. 

3. When would you want to pass the second option (form answer above) to the state setter function? 
A: When the intial useState value is not needed to calculate the new state value. 
*/
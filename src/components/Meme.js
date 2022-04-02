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
Props vs state quiz:

1. How would you describe the concept of state? 
A: States are mutable values that belong to components. 

Given A: A way for react to remember saved values from within a component. This is similar to declaring variables from within a component, with a few added bonuses. 

2. When would you want to use props instead of state? 
A: When an attribute does not change at any point in time. 

Given A: Anytime you want to pass data into a component so that component can determine what will get displayed on the screen. 

3: When would you want to use state instead of props? 
A: When an attribute will change at some point in time. 

Given A: Anytime you want a component to maintain some values from within the component. (And remember those values even when React re-renders the component.)

4: What does "immutable" mean? Are props immutable? Is state immutable?
A: Immutable means not changing. Props are immutable, states are not.  

Given A: 
*/
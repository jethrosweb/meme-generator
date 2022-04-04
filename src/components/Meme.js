import React from "react"
import memesData from "../memesData"

export default function Meme() {

    let [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    let [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return (
        <main>
            <div className="meme--form">
                <input type="text" placeholder="Top text" className="meme--inputs" />
                <input type="text" placeholder="Bottom text" className="meme--inputs" />
                <button onClick={getMemeImage} className="meme--button">Get a new meme image 🖼</button>
            </div>
            <img src={meme.randomImage} className="meme--image" />
        </main>
    )
}

/* Conditional rendering questions: 

1. What is conditional rendering? 
A: To determine certain outcomes depending on the given conditions. 

2. When would you use &&? 
A: When to display something or not display something (e.g. booleans).

3. When would you use a ternary? 
A: Which of two outcomes to display. 

4. What if you need to decide between 2 options on what to display? 
A: Use a regular conditional statement (if, if else, or switch).

*/


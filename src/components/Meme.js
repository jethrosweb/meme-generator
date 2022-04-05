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

/* Form Questions: 

1. In a vanilla JS app, at what point in the form submission process do you gather all the data from the filled-out form? 
A: When the form is submitted. 

2. In a React app, when do you gather all the data from the filled-out form?
A: When the component state changes, meaning as soon as an elements value (or checked) is changed. Thus, as the form is being completed. 

3. Which attribute in the form elements (value, name, onChange, etc.) should match the property name being held in state for that input? 
A: Name.

4. What's different about saving the data from a checkbox element vs. other form elements? 
A: It's a boolean so the checked property is used to determine the input not the value property. 

5. How do you watch for a form submit? How can you trigger a form submit? 
A: Add the onSubmit handler on the form element - typically triggered using a <button> event listener. 

*/

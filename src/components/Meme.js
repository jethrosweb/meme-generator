import React from "react"
import memesData from "../memesData"

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

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
                <input 
                    type="text" 
                    placeholder="Top text" 
                    className="meme--inputs" 
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input 
                    type="text" 
                    placeholder="Bottom text" 
                    className="meme--inputs" 
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                />
                <button onClick={getMemeImage} className="meme--button">Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

/* useEffect Quiz:

1. What is a "side effect" in React? What are some examples? 
A: Anything that React is not handling, i.e., an outside system. For example, API, local storage.  

2. What is NOT a "side effect" in React? Examples? 
A: Anything that React controls, for example, maintaining state.  

3. When does React run your useEffect function? When does it NOT run the effect function? 
A: Always runs when the component load and if there are no dependencies, it will run everytime the component is re-rendered. It will not run if a declared dependency is the same between renders. 

4. How would you explain what the "dependecies array" is?
A: A method for dictating when you want the useEffect function to run. 

*/

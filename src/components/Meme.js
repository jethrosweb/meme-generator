import React from "react"
import memesData from "../memesData"

export default function Meme() {

    let [memeImage, setMemeImage] = React.useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }

    return (
        <main>
            <div className="meme--form">
                <input type="text" placeholder="Top text" className="meme--inputs" />
                <input type="text" placeholder="Bottom text" className="meme--inputs" />
                <button onClick={getMemeImage} className="meme--button">Get a new meme image 🖼</button>
            </div>
            <img src={memeImage} className="meme--image" />
        </main>
    )
}


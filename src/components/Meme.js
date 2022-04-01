import React from "react"

export default function Meme() {
    return (
        <main>
            <form className="meme--form">
                <input type="text" placeholder="Top text" className="meme--inputs" />
                <input type="text" placeholder="Bottom text" className="meme--inputs" />
                <button className="meme--button">Get a new meme image 🖼</button>
            </form>
        </main>
    )
}
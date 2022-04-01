import React from "react"
import logo from "../pics/troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Logo" className="header--logo" />
            <h2 className="header--title">Meme Generator</h2>
            <h5 className="header--text">React Course - Project 3</h5>
        </header>
    )
}
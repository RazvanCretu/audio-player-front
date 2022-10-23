import React from "react"
import "../styles/AudioHero.css"

const AudioHero = ({name, artist}) => {
    return  (
        <div>
            <h2 className="title">{name.replace('.mp3','')}</h2>
            <p className="artist">{artist}</p>
        </div>
    )
}

export default AudioHero;
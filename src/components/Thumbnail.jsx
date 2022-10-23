import React from 'react';
import "../styles/Thumbnail.css"

const Thumbnail = ({src}) => {
    return (
        <div className="thumbnail">
            <img src={src} alt="Thumbnail"/>
        </div>
    )
}

export default Thumbnail;
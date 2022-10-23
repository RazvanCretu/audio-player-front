import React from 'react';
import {FaInstagram, FaBandcamp, FaSoundcloud} from "react-icons/fa";
import "../styles/Socials.css"

const Socials = () => {
    
    return (
        <div>
            <a className='insta' href="https://www.instagram.com/cozu_ro/" target="_blank" rel="noreferrer">
                <FaInstagram />
            </a> 
        </div>
    )
}

export default Socials;
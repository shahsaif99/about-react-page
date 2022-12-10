import React from "react"
import img1 from "../images/logo.png"
export default function Navbar(){
    return (
        <nav className="navbar">
        <img src={img1} alt="react logo" />
        <h4 className="nav-title">My first React-Project 1</h4>
        </nav>
    )
}
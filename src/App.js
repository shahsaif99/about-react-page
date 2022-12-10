import React from "react"
import ReactDOM from "react-dom/client"
import Main from "./components/Main"
import Navbar from "./components/Navbar"

export default function App(){
    return(
        <div className="container">
            <Navbar/>
            <Main/>
            
        </div>
    )
}
    

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<App/>)
//ReactDOM.createRoot(document.getElementById("root")).render(page)
//ReactDOM.render(page,document.getElementById("root"))
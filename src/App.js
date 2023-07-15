import React from "react";
import './app.css'
import Header from "./Components/Header/Header";
import SectionOne from "./Components/Body/sectionOne/Section1";

const App = () =>{
    return( 
    <div className="app">
        <Header/>
        <SectionOne/>
    </div>
     )
}

export default App
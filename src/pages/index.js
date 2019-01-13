import React from "react"
import Header from "../components/header"

//JSX: Syntax extension to JS
export default () => (
    <div style={{color: `purple`}}>
        <Header headerText="Home Page"/>
        <p>What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt=""/>
    </div>
)

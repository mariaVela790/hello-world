import React from "react"
import Header from "../components/header"
import {Link} from "gatsby"

export default () => (
    <div style={{color: `teal`}}>
        <Link to="/">Home</Link>
        <Header headerText="Contact Page"/>
        <p>Message us today!</p>
    </div>
)
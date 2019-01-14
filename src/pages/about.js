import React from "react"
import {Link} from "gatsby"
import Header from "../components/header"

export default () => (
    <div style = {{color: `teal`}}>
        <Link to="/contact">Contact</Link>
        <Header headerText="About Gatsby"/>
        <Header headerText="It's pretty cool!"/>
        <p>Such wow. Very React.</p>
    </div>
)

/*The Link component allows us to link to other pages using the -to- property.*/

/*Note we imported the Header component we created in header.js and made it*/
/*-reusable by adding the property of headerText*/
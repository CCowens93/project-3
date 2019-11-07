import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class AboutMeComponent extends Component{
    render(){
        return(
        <div>
            <h1>Hello</h1>
            <Link to="/Profile">Home Page</Link>
        </div>
        )}
}
export default AboutMeComponent
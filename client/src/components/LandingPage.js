import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class LandingPageComponent extends Component{
    render(){
        return(
        <div>
        <h1>List of Profiles</h1>
            <Link to="./Profile">Profile</Link>
            </div>
        )}
}

export default LandingPageComponent
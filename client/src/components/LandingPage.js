import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class LandingPageComponent extends Component{

    state = {
        artist: '',
        style: ''
    }
    render(){
        return(
        <div>
        <h1>List of Profiles</h1>
            <Link to="./Profile">{this.state.artist}</Link>
            </div>
        )}
}

export default LandingPageComponent
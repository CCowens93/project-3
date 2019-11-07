import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class FeaturedWorkComponent extends Component {
    render(){
        return(
            <div>
                <h1>Como Estas</h1>
                <Link to="./Profile">Back</Link>
            </div>
            )}
}

export default FeaturedWorkComponent
import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class ContactComponent extends Component{
    render(){
        return (
            <div>
        <h1>What up</h1>
        <Link to="./">Home Page</Link>
        </div>
        )}
}

export default ContactComponent
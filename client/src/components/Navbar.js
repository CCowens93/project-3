import React, { Component } from 'react'

class Navbar extends Component{
    render(){
        return (
            <div className='navbar'>
                <ul>
                    <li><a href="AboutMe">About me</a></li>
                    <li>Portfolio</li>
                    <li>Featured Work</li>
                    <li>Contact</li>
                </ul>
            </div>
        )
    }
}

export default Navbar
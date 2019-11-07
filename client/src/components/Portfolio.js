import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import axios from 'axios'

class PortfolioComponent extends Component{

    state = {
        allWriting: []
    }

    componentDidMount(){
        axios.get('./api/writing')
        .then((allWriting) => {
            this.setState({allWriting: allWriting})
    
        })
    }


    render(){
        return(
            <div>
                <h1>Hola</h1>
                {this.state.allWriting.map((writing) => {
                    return(<p>{writing.name}</p>)
                })}

                <Link to="./">Home Page</Link>
            </div>
            )}
    }


export default PortfolioComponent

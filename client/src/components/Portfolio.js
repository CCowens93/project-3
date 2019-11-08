import React, { Component } from 'react'



// import axios from 'axios'

class PortfolioComponent extends Component{

    state = {
        allWritings: []
    }

    // componentDidMount(){
    //     axios.get('/api/writings')
    //     .then((allWritings) => {
    //         this.setState({allWritings: allWritings})
    
    //     })
    // }


    render(){
        return(
            <div>
                <h2>Portfolio</h2>
                {this.state.allWritings.map((writing) => {
                    return(<p>{writing.name}</p>)
                 })} 

                
            </div>
            )}
    }


export default PortfolioComponent

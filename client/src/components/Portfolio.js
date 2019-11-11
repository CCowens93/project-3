import React, { Component } from 'react'

class PortfolioComponent extends Component {

render() {
        return (
            <div className="portfolio">
                
                <span>{this.props.title}</span>
                <span>{this.props.content}</span>
                <span>{this.props.dateWritten}</span>
                </div>
               
                )
    
        }
}
export default PortfolioComponent

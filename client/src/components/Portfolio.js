import React, { Component } from 'react'





class PortfolioComponent extends Component {

    addNewWritingToPortfolioList = (newWriting) => {
        const portfolioList = [...this.state.portfolioList]
        portfolioList.push(newWriting)
        this.setState({ portfolioList })
    }

   
render() {
        return (
            <div className="portfolio">
                <h2>Portfolio</h2>
                <span>{this.props.title}</span>
                </div>
               
                )
    
        }
}
export default PortfolioComponent

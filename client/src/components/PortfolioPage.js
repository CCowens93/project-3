import React, { Component } from 'react'

import PortfolioList from './PortfolioList.js'

class PortfolioPage extends Component{

    addNewWritingToPortfolioList = (newWriting) => {
        const writingList = [...this.state.writingList]
        writingList.push(newWriting)
        this.setState({ writingList })
    }



    render (){
        return(
            <div>
            <h2>Portfolio</h2>

            <PortfolioList wrtitingList={this.props.title}/>

            </div>
        )
    }
}

export default PortfolioPage
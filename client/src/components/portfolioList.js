import React, { Component } from 'react'

import axios from 'axios'
import Portfolio from './portfolio'

class PortfolioList extends Component {

    state = {
        portfolioList: []
    }

    componentDidMount() {

        axios.get('/api/portfolio')
            .then((res) => {
                this.setState({portfolioList: res.data})

            })
        }
        
render(){
    const portfolioList = this.state.portfolioList;

    console.log(portfolioList)

    const PortfolioComponents = portfolioList.map((portfolio, index) => {
        return(
            <Portfolio
            title={portfolio._id.title}
            content={portfolio._id.content}
            dateWritten={portfolio._id.dateWritten}
            key={index}/>
        )
    })


    return(
        <div>
            {PortfolioComponents}
        </div>
    )
}
}
    
export default PortfolioList
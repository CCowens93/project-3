import React, { Component } from 'react'

import axios from 'axios'

import Portfolio from './Portfolio.js'

class PortfolioList extends Component {
    
    state = {
        portfolioList: []
    }


componentDidMount(){
    
    axios.get('/api/writings')
        .then((res) => {
            this.setState({ portfolioList: res.data })
        })
}
render() {
    const portfolioList = this.state.portfolioList;
    
    console.log(portfolioList);

    const portfolioComponents = portfolioList.map((portfolio, index) => {
        return (<Portfolio
            title={portfolio.title}
            content={portfolio.content}
            dateWritten={portfolio.dateWritten}
            key={index} />);    
    });

    return (
        <div>
            {portfolioComponents}
        </div>
    );
}

}
export default PortfolioList
import React, { Component } from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom'


class Portfolio extends Component{

    state = {
        
        title: '',
        content: '',
        dateWritten: '',
        portfolioList: []
    }

    
        


    handlePortfolioWork = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;

        const newState = { ...this.state };
        newState[attributeName] = attributeValue;
        this.setState(newState)
    }
    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/portfolio', this.state)
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

        const PortfolioComponents = portfolioList.map((portfolio) => {
        return(
            <Link to={`/portfolio/${portfolio._id}`}>
            <h2>{portfolio.title}</h2>
            <p>{portfolio.content}</p>
            <p>{portfolio.dateWritten}</p>
            </Link>);
        
    });
        
        return(
            <div>
                <h1>Portfolio</h1>
                {PortfolioComponents}
                

                <form onSubmit={this.handleSubmit}>
                        <div>
                            <input
                                name="title"
                                type="text"
                                placeholder="title"
                                value={this.state.title}
                                onChange={this.handlePortfolioWork}
                                />
                                
                        </div>

                        <div>
                            <input
                                name="content"
                                type="text"
                                placeholder="content"
                                value={this.state.content}
                                onChange={this.handlePortfolioWork}
                            />
                        </div>

                        <div>
                            <input
                                name="dateWritten"
                                type="date"
                                placeholder="date written"
                                value={this.state.dateWritten}
                                onChange={this.handlePortfolioWork}
                            />

                        </div>

                        <div>
                            <input
                                type="submit"
                                value="Create New Writing"
                            />
                        </div>
                    </form>
                </div>

            
        )
    }
}


export default Portfolio


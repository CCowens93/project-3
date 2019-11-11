import React, { Component } from 'react'

import axios from 'axios'



class PortfolioComponent extends Component{

    handlePortfolioWork = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;
    
        const newState = { ...this.state};
        newState[attributeName] = attributeValue;
        this.setState(newState)
    }
    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/profile', this.state)
    }

    state = {
        portfolio: [
            {
                title: '',
                content:'',
                themes: '',
                dateWritten: ''
            }
        ]
    }

    


    render() {
        return (
            <div>
                <h2>Portfolio</h2>
                



            <div>
                <form onSubmit = {this.handleSubmit}>
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
                            type="submit"
                            value="create new writing"
                            />
                    </div>
                 </form>
            </div>

            </div>
            )
        }
    }


export default PortfolioComponent

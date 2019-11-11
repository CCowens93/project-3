import React, { Component } from 'react'

import axios from 'axios'

class PortfolioForm extends Component {

    state = {
        
        title: '',
        content: '',
        dateWritten: ''
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
        axios.post('/api/writings', this.state)
    }


render (){
    return(
<div>
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
                                type="text"
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


export default PortfolioForm
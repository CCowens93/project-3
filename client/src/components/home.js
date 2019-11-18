import React, { Component } from 'react'
import axios from 'axios'
import ArtistList from './artistList.js'




class HomePage extends Component {

    
    state = {
        artistName: '',
        style: '',
        
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
        axios.post('/api/artist', this.state)
    }

   
    render() {


        return (
            
            <div>
                <h1>Home Page</h1>
                <ArtistList />
                
                
  
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input
                        name="artistName"
                        type="text"
                        placeholder="Artist Name"
                        value={this.state.artistName}
                        onChange={this.handlePortfolioWork}
                        />
                        
                </div>

                <div>
                    <input
                        name="style"
                        type="text"
                        placeholder="Style"
                        value={this.state.style}
                        onChange={this.handlePortfolioWork}
                        />
                </div>

                

                <div>
                    <input
                        type="submit"
                        value="Create Portfolio"
                    />
                </div>
            </form>
            


        </div>
        )}}
    



export default HomePage
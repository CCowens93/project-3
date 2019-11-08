import React, { Component } from 'react'

import axios from 'axios'



class ProfileForm extends Component{

    state = {
        newArtist: {
            artistName: '',
            style: ''
        }
        
    
    }
    handleNewArtistProfile = (evt) => {
        const attributeName = evt.target.name;
        const attributeValue = evt.target.value;


        const newArtist = { ...this.state.newArtist };
        newArtist[attributeName] = attributeValue;

        this.setState({newArtist})
    }
    handleSubmit = (evt) => {
        evt.preventDefault()
        axios.post('/api/writers', this.state.newArtist)
        
    }



    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                        <div>
                            <input
                                name="artistName"
                                type="text"
                                placeholder="name"
                                value={this.state.newArtist.artistName}
                                onChange={this.handleNewArtistProfile}/>
                                

                        </div>

                        <div>
                            <input 
                                name="style"
                                type="text"
                                placeholder="style"
                                valiue={this.state.newArtist.style}
                                onChange={this.handleNewArtistProfile}
                                />
                        </div>

                        <div>
                        <input
                            type="submit"
                            value="Create New Profile"
                            

                            
                        />
                        </div>

                </form>
                
            </div>
        )}
}

export default ProfileForm
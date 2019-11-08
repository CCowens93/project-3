import React, { Component } from 'react'





class HomePageComponent extends Component{

    state = {
        artistList: [
            {
                artistName: '',
                style: ''
            }
        ]
        
    }

    

    addNewArtistToProfileList = (newArtist) => {
        const artistList = [...this.state.artistList]
        artistList.push(newArtist)
        this.setState({ artistList })
    }

    

    render(){
        return(
        <div>
            <h1>List of Profiles</h1>
                
            
        </div>
        )}
}

export default HomePageComponent
import React, { Component }  from 'react';

import axios from 'axios'

 
class ProfileComponent extends Component {


    componentDidMount(){
        this.refreshArtists()
    }
    
    
    
        refreshArtists = () => {
        return axios.get('/api/artist')
            .then((response) => {
                console.log(response.data)
                this.setState({
                    artistList: response.data
                })
            })
    }

   
       
        onDeleteClick = (profileId) => {
            const url = '/api/artist' + profileId
            axios.delete(url)
            .then(()=> {
                this.refreshArtists()
            })
        }

       

    

    render(){
        return (
            <div className='profile'>
                
                <span>{this.props.artistName}</span>
                <span>{this.props.style}</span>
                {/* <span><button onClick={this.onDeleteClick}>Delete</button></span> */}
                
            </div>
            
                
           
        )
    }
}

export default ProfileComponent

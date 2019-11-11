import React, { Component }  from 'react';

import axios from 'axios'

 
class ProfileComponent extends Component {

   




    toggleEdit = () => {
        const editProfile= !this.state.editProfile
        this.setState({editProfile})
    }

    changeArtist = () => {
        axios.put(`/api/artist/${this.props.match.params.profileId}`, this.state.changeProfile)
    }

    onDeleteClick = () => {
        axios.delete(`/api/artist/${this.props.params.profileId}`)
    }

    

    render(){
        return (
            <div className='profile'>
                
                <span>{this.props.artistName}</span>
                <span>{this.props.style}</span>
                
                
            </div>
        )
    }
}

export default ProfileComponent

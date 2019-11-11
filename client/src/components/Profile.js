import React, { Component }  from 'react';

import axios from 'axios'

 
class ProfileComponent extends Component {

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




    toggleEdit = () => {
        const editProfile= !this.state.editProfile
        this.setState({editProfile})
    }

    changeProfile = () => {
        axios.put(`/api/profile/${this.props.match.params.profileId}`, this.state.changeProfile)
    }

    onDeleteClick = () => {
        axios.delete(`/api/profile/${this.props.params.profileId}`)
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

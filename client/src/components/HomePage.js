import React, { Component } from 'react'
import ProfileList from './ProfileList.js'
import ProfileForm from './ProfileForm.js'



class HomePageComponent extends Component{

    addNewProfileToProfileList = (newProfile) => {
        const profileList = [...this.state.profileList]
        profileList.push(newProfile)
        this.setState({ profileList })
    }

    

        render(){
        return(
        <div>
            <h1>List of Profiles</h1>
            {/* <ProfileList artistList={this.props.artistName}/> */}
            <h1>Create new Artists</h1>
            {/* <ProfileForm addNewProfileToProfileList={this.props.addNewProfileToProfileList}/> */}

                
            
        </div>
        )}
}

export default HomePageComponent
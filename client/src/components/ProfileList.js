import React, { Component } from 'react'
import Profile from './Profile.js'

import axios from 'axios'

class ProfileList extends Component {

    state = {
        artistList: []
    }

    componentDidMount() {

        axios.get('/api/artist')
            .then((res) => {
                this.setState({artistList: res.data})

            })
    }

    render() {
        const profileList = this.state.artistList;

        console.log(profileList);

        const profileComponents = profileList.map((profile, index) => {
            return (<Profile
                artistName={profile.artistName}
                // style={profile.style}
                key={index} />);

        });

        return (
            <div>
                {profileComponents}
            </div>
        );
    }
    
}

export default ProfileList

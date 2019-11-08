import React, { Component } from 'react'
import Product from './Profile'

class ProfileList extends Component {
    render() {
        const profileList = this.props.profileList;

        console.log(profileList);

        const profileComponents = profileList.map((profile, index) => {
            return <Product
                artistName={profile.artistName}
                style={profile.style}
                key={index} />;
        });

        return (
            <div>
                {profileComponents}
            </div>
        );
    }
}

export default ProfileList

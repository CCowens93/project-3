import React, { Component } from 'react'

import axios from 'axios'

class ProfileForm extends Component {

    state = {
        artistName: '',
        style: ''
    }



    handleNewArtistProfile = (evt) => {
        const attributeName = evt.target.name;
        const attributeValue = evt.target.value;


        const newState = { ...this.state };
        newState[attributeName] = attributeValue;
        this.setState(newState)
    }
    handleSubmit = (evt) => {
        evt.preventDefault()
        axios.post('/api/artist', this.state)

    }



    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            name="artistName"
                            type="text"
                            placeholder="name"
                            value={this.state.artistName}
                            onChange={this.handleNewArtistProfile}
                        />


                    </div>

                    <div>
                        <input
                            name="style"
                            type="text"
                            placeholder="style"
                            valiue={this.state.style}
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
        )
    }
}

export default ProfileForm
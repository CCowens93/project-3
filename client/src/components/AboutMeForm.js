import React, { Component } from 'react'

import axios from 'axios'

class AboutMeForm extends Component{

    state = {
        aboutMe: ''
    }

    handleAboutMe = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;

        const newState = { ...this.state };
        newState[attributeName] = attributeValue;
        this.setState(newState)
    }
    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/aboutMe', this.state)
    }

render (){
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input
                        name="aboutMe"
                        type="text"
                        placeholder="about me"
                        vale={this.state.aboutMe}
                        onChange={this.handleAboutMe}
                        />
                </div>

                <div>
                    <input
                        type="submit"
                        value="Create About Me"
                        />
                </div>


            </form>
        </div>
    )
}

}

export default AboutMeForm


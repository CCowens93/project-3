import React, { Component } from 'react'

import axios from 'axios'

import AboutMe from './AboutMe.js'

class AboutMeList extends Component {
    state = {
        aboutMeList: []
    }


componentDidMount(){
    
    axios.get('/api/aboutMe')
        .then((res) => {
            this.setState({ aboutMeList: res.data })
        })
}
render() {
    const aboutMeList = this.state.aboutMeList;
    
    console.log(aboutMeList);

    const aboutMeComponents = aboutMeList.map((aboutMe, index) => {
        return (<AboutMe
            aboutMe={aboutMe.aboutMe}
            
            key={index} />);    
    });

    return (
        <div>
            {aboutMeComponents}
        </div>
    );
}

}


export default AboutMeList
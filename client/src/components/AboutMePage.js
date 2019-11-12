import React, { Component } from 'react'

import AboutMeList from './AboutMeList.js'

class AboutMePage extends Component {
   addNewAboutMeToAboutMeList = (newAboutMe) => {
       const aboutMeList = [...this.state.aboutMeList]
       aboutMeList.push(newAboutMe)
       this.setState({ aboutMeList })
   }

   render(){
       return(
           <div>
               <h2>About Me</h2>
               <AboutMeList aboutMeList={this.props.aboutMe}/>
           </div>
       )
   }

}

export default AboutMePage
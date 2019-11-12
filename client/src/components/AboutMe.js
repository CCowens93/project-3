import React, { Component } from 'react'



class AboutMeComponent extends Component{


    render(){
        return(
        <div className="aboutMe">

            <span>{this.props.aboutMe}</span>

        </div>



        )}
}
export default AboutMeComponent
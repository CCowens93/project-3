import React, { Component }  from 'react';


 
class ProfileComponent extends Component {

    render(){
        return (
            <div className='profile'>
                <h1>Writer's Portfolio Page</h1>
                <span>{this.props.artistName}</span>
                <span>{this.props.style}</span>
                
                
            </div>
        )
    }
}

export default ProfileComponent

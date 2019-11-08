import React, { Component }  from 'react';


 
class ProfileComponent extends Component {

    render(){
        return (
            <div className='profile'>
                <h1>Writer's Portfolio Page</h1>
                <div>{this.props.artistName}</div>
                <div>{this.props.style}</div>
                
                
            </div>
        )
    }
}

export default ProfileComponent

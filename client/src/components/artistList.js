import React, { Component } from 'react'

import {Link} from 'react-router-dom'

import axios from 'axios'



class ArtistList extends Component {
    
    
    state = {
        artistList: []
    }

    componentDidMount() {

        axios.get('/api/artist')
            .then((res) => {
                this.setState({artistList: res.data})

            })
    }

    render(){
        const artistList = this.state.artistList;

        console.log(artistList);

        const ArtistComponents = artistList.map((artist) => {
            return (<Link to={`/portfolio/${artist._id}`}>
                    <h3>{artist.artistName}</h3>
                    <p>{artist.style}</p>
                    </Link>);
        });
        return(

            <div>
            {ArtistComponents}
            </div>
            
        )
    }


}

export default ArtistList

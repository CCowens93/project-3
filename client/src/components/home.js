import React, { Component } from 'react'
import axios from 'axios'



class HomePage extends Component {


    state = {
        artistName: '',
        style: '',
        content:'',
        location:'',
        artistList: []

    }

    handlePortfolioWork = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;

        const newState = { ...this.state };
        newState[attributeName] = attributeValue;
        this.setState(newState)
    }
    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/artist', this.state)
    }
    componentDidMount() {

        axios.get('/api/artist')
            .then((res) => {
                this.setState({ artistList: res.data })

            })
    }
    render() {
        const artistList = this.state.artistList;

        console.log(artistList);

        const ArtistComponents = artistList.map((artist) => {
            return (
                <div className="single_artist">
                    <h2>{artist.artistName}</h2>
                    <p>{artist.style}</p>
                    <p>{artist.content}</p>
                    <p>{artist.location}</p>
                </div>);
        });





                // <Link to={`/portfolio/${artist._id}`}>
                //     <h3>{artist.artistName}</h3>
                //     <p>{artist.style}</p>
                // </Link>);
        

        return (

            <div className="Home">

                <h1>Writers Unite</h1>
                
        
                <h2>This is a spot to add your own personal work to your app</h2>
                <div  className="amateur_artists">
                {ArtistComponents}
                </div>
                
                



            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            name="artistName"
                            type="text"
                            placeholder="Artist Name"
                            value={this.state.artistName}
                            onChange={this.handlePortfolioWork}
                        />

                    </div>

                    <div>
                        <input
                            name="style"
                            type="text"
                            placeholder="Style"
                            value={this.state.style}
                            onChange={this.handlePortfolioWork}
                        />
                    </div>
                    <div>
                        <input
                            name="content"
                            text="text"
                            placeholder="Content"
                            value={this.state.content}
                            onChange={this.handlePortfolioWork}
                            />
                    </div>
                    
                    <div>
                        <input
                            name="location"
                            type="text"
                            placeholder="Location"
                            value={this.state.location}
                            onChange={this.handlePortfolioWork}
                            />
                    </div>



                    <div>
                        <input
                            type="submit"
                            value="Create Entry"
                        />
                    </div>
                </form>
                </div>
            </div>
        )
    }
}




export default HomePage
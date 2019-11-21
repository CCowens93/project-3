import React, { Component } from 'react'



import axios from 'axios'



class Portfolio extends Component {

    state = {

        artist: {
            artistName: '',
            style: ''
        },
        portfolioList: []

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
        axios.post('/api/portfolio', this.state)
    }
    componentDidMount() {
        console.log(this.props.match.params.artistId)

        const currentArtistUrl = `/api/artist/${this.props.match.params.artistId}`



        axios.get('/api/portfolio')
            .then((res) => {
                console.log(res.data)
                this.setState({ portfolioList: res.data })

            })

        axios.get(currentArtistUrl)
            .then((res) => {
                console.log(res.data)
                this.setState({ artist: res.data })
            })

    }



render() {
    const portfolioList = this.state.portfolioList;

    console.log(portfolioList)

    const PortfolioComponents = portfolioList.map((portfolio) => {
        return (
            <div>
                <h2>{portfolio.title}</h2>
                <p>{portfolio.content}</p>
                <p>{portfolio.dateWritten}</p>
            </div>);

    });

    return (
        <div>
            <h1>Portfolio</h1>
            {PortfolioComponents}




            <form onSubmit={this.handleSubmit}>
                <div>
                    <input
                        name="title"
                        type="text"
                        placeholder="title"
                        value={this.state.title}
                        onChange={this.handlePortfolioWork}
                    />

                </div>

                <div>
                    <input
                        name="content"
                        type="text"
                        placeholder="content"
                        value={this.state.content}
                        onChange={this.handlePortfolioWork}
                    />
                </div>

                <div>
                    <input
                        name="dateWritten"
                        type="date"
                        placeholder="date written"
                        value={this.state.dateWritten}
                        onChange={this.handlePortfolioWork}
                    />

                </div>

                <div>
                    <input
                        type="submit"
                        value="Create New Writing"
                    />
                </div>
            </form>
        </div>




    )

}
}


export default Portfolio



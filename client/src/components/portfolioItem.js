import React from 'react'
import axios from 'axios'


export default class PortfolioItem extends React.Component {
    state = {
        
        title: '',
        content: '',
        dateWritten: '',
        portfolioItem:[]
    }

    handlePortfolioItem = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;

        const newState = { ...this.state };
        newState[attributeName] = attributeValue;
        this.setState(newState)
    }
    handleSubmit = (event) => {
        event.preventDefault()
        axios.post(`/api/portfolio/${this.props.match.params.artistId}`, this.state)
    }
    


    componentDidMount() {
        
        
        console.log(this.props.match.params.portfolioId)
        // get single porfolio item using portfolioId
        axios.get('/api/portfolio')
        .then((res) => {
            console.log( res.data)
            this.setState({ portfolioItem: res.data})
        })
    }


    render() {
        const portfolioItemList = this.state.portfolioItem

        const portfolioItemComponents = portfolioItemList.map((portfolioItem)=>{
            return (
                <div>
                    <h2>{portfolioItem.title}</h2>
                    <p>{portfolioItem.content}</p>
                    <p>{portfolioItem.dateWritten}</p>
                </div>
            )
        });

        


        return(
            <div>

                <div className = "Portfolio_List">
                    {portfolioItemComponents}

                </div>

            <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            name="title"
                            type="text"
                            placeholder="title"
                            value={this.state.title}
                            onChange={this.handlePortfolioItem}
                        />

                    </div>

                    <div>
                        <input
                            name="content"
                            type="text"
                            placeholder="content"
                            value={this.state.content}
                            onChange={this.handlePortfolioItem}
                        />
                    </div>

                    <div>
                        <input
                            name="dateWritten"
                            type="date"
                            placeholder="date written"
                            value={this.state.dateWritten}
                            onChange={this.handlePortfolioItem}
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
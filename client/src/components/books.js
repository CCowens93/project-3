import React, {Component } from 'react'

import axios from 'axios'

class BookList extends Component {
    
    state = {
        genre:'',
        author:'',
        title:'',
        book_list:[]

    }


handleBookList = (event) => {
    const attributeName = event.target.name;
    const attributeValue = event.target.value;

    const newState = { ...this.state};
    newState[attributeName] = attributeValue;
    this.ListeningStateChangedEvent(newState)
}

handleSubmit = (event) => {
    event.preventDefault ()
    axios.post('/api/portfolio'. this.state)
}

componentDidMount() {
    axios.get('/api/portfolio')
    .then((res) => {
        this.setState({book_list : res.data})
    })
}

render () {
    const bookList = this.state.book_list;

    const BookComponents = book_list.map((book_list) => {
        return (
            <div>
                <h2>{book_list.genre}</h2>
                <p>{book_list.author}</p>
                <p>{book_list.title}</p>
            </div>
        );
    });

        return(
            <div className = "book_list">
                <h2>Published Authors</h2>
                <div>
                    {BookComponents}
                </div>


                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            name="genre"
                            type="text"
                            placeholder="Genre"
                            value={this.state.genre}
                            onChange={this.handleBookList}
                            />
                    </div>

                    <div>
                        <input
                            name="author"
                            type="text"
                            placeholder="Author"
                            value={this.state.author}
                            onChange={this.handleBookList}
                            />
                    </div>

                    <div>
                        <input 
                            name="title"
                            type="text"
                            placeholder="Title"
                            value={this.state.title}
                            onChange={this.handleBookList}
                            />
                    </div>

                    <div>
                        <input
                            type="submit"
                            value="Create Literature Entry"
                            />
                    </div>
                </form>

            </div>
        )
    }
}

export default BookList
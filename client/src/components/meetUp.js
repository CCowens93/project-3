import React, { Component } from 'react'
import axios from 'axios'

class MeetUp extends Component {

    state = {
        venue: '',
        location: '',
        environment: '',
        meetUpList: []
    }
    handleMeetUp = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;

        const newState = { ...this.state };
        newState[attributeName] = attributeValue;
        this.setState(newState)
    }
    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/meetUp', this.state)
    }
    componentDidMount() {

        axios.get('/api/meetUp')
            .then((res) => {
                this.setState({ meetUpList: res.data })

            })
        }



    render(){
        const meetUpList = this.state.meetUpList;

        const MeetUpComponents = meetUpList.map((meetUp) => {
        return (
            <div className="single_meet_up">
                <h2>{meetUp.venue}</h2>
                <p>{meetUp.location}</p>
                <p>{meetUp.environment}</p>
            </div>);
        });
        

        
        return(
            <div className = "Meet_Up">
               
                <h2>This is where you can list any places that are good for having book clubs and/or have creative writing sessions with others in your area!
                     </h2>
                    <div className="meet_up_component">
                       {MeetUpComponents}
                    </div>
                    
                
               <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            name="venue"
                            type="text"
                            placeholder="Venue"
                            value={this.state.venue}
                            onChange={this.handleMeetUp}
                            />
                    </div>

                    <div>
                        <input
                            name="location"
                            type="text"
                            placeholder="Location"
                            value={this.state.location}
                            onChange={this.handleMeetUp}
                            />
                    </div>

                    <div>
                        <input  
                            name="environment"
                            type="text"
                            placeholder="Type of Environment"
                            value={this.state.environment}
                            onChange={this.handleMeetUp}
                            />
                    </div>

                    <div>
                        <input
                            type="submit"
                            value="Create Meet Up"
                            />
                    </div>
                </form>
                </div>
            </div>
        )
    }
}

export default MeetUp
import axios from 'axios';
import * as _ from 'lodash';
import React, { Component } from 'react';
import Ticket from 'src/components/Ticket';

import './App.css';

class App extends Component {
    state = {
        tickets: [],
    };

    componentDidMount() {
        this.fetchTickets();
    }

    fetchTickets = () => {
        axios.get('/tickets.json')
            .then(function(response) {
                const tickets = _.result(response, 'data.tickets', {});
                this.setState({tickets})
            })
            .catch(function(error) {
                console.log(error);
            })
    };

    render() {
        const { tickets } = this.state;
        return (
            <div className="App">
                <Ticket
                    listOfTickets={tickets}
                />
            </div>
        );
    }
}

export default App;

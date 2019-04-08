import axios from 'axios';
import React, { Component } from 'react';
import Ticket from './components/Ticket';
import FilterBasket from './components/FilterBasket';
import * as _ from 'lodash';

import './App.scss';

class App extends Component {
    state = {
        tickets: [],
        stops: 0,
    };

    componentDidMount() {
        this.fetchTickets().then(
            (response) => {
                const stops = _.maxBy(response, 'stops');
                // stops : stops.stops -  bingo
                this.setState({ tickets: response,  stops: stops ? stops.stops : 0 });
            },
            (error) => console.log(error));
    }

    fetchTickets = async () => {
        let res = await axios.get("/tickets.json");
        return _.result(res, 'data.tickets', []);
    };

    render() {
        const { tickets, stops } = this.state;
        return (
            <div className="body">
                <FilterBasket
                    stops={stops}
                />
                <Ticket
                    tickets={tickets}
                />
            </div>
        );
    }
}

export default App;

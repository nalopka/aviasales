import axios from 'axios';
import React, { Component } from 'react';
import Ticket from './components/Ticket';
import FilterBasket from './components/FilterBasket';

import './App.scss';

class App extends Component {
    state = {
        tickets: [],
    };

    componentDidMount() {
        this.fetchTickets();
    }

    fetchTickets = async () => {
        let res = await axios.get("/tickets.json");
        let { tickets } = await res.data;
        this.setState({ tickets });
    };

    render() {
        const { tickets } = this.state;
        return (
            <div className="body">
                <FilterBasket />
                <Ticket
                    tickets={tickets}
                />
            </div>
        );
    }
}

export default App;

import * as _ from 'lodash';
import React from 'react';

import './Ticket.scss';
import { formatDate, declOfNum } from '../../utils/utils';

function FlightBrief(props) {
    const { time, destination, destinationName, destinationTime, direction } = props;
    const directionClassName = `flight-brief-${direction}`;
    return (
        <div className={directionClassName}>
            <time>{time}</time>
            <p>{destination}, {destinationName}</p>
            <div className='time'>{formatDate(destinationTime)}</div>
        </div>
    );
}

function Ticket({ tickets }) {
    const renderTickets = () => {
        return _.map(tickets, ticketItem)
    };

    /**
     * Рендер плашек с билетами
     */
    const ticketItem = (ticketItem, i) => {
        const {
            carrier, price, departure_time, arrival_time,
            origin, origin_name, departure_date, arrival_date,
            destination, destination_name, stops,
        } = ticketItem;

        return (
            // Не к чему ключи привязать
            <div className="ticket-item" key={i}>
                <div className="side">
                    <img src="./images/Logo.svg" alt={carrier} />
                    <button className='buy-btn'>
                        <span>Купить</span>
                        <span>за {price}Р</span>
                    </button>
                </div>
                <div className='content'>
                    <div className='flight-brief'>

                        <FlightBrief
                            time={departure_time}
                            destination={origin}
                            destinationName={origin_name}
                            destinationTime={departure_date}
                            direction={'departure'}
                        />

                        <div className='flight-brief-layovers'>
                            <p className="transfer-count">{stops ? declOfNum(stops, [ 'пересадка', 'пересадки', 'пересадок' ]) : null}</p>
                            <div className='logo'>
                                <img src='./images/airplane-logo.png' alt='airplane' />
                            </div>

                        </div>

                        <FlightBrief
                            time={arrival_time}
                            destination={destination}
                            destinationName={destination_name}
                            destinationTime={arrival_date}
                            direction={'arrival'}
                        />
                    </div>
                </div>
            </div>
        )
    };
    return (
        <div className="ticket-list">
            {renderTickets()}
        </div>
    );
}

export default Ticket;

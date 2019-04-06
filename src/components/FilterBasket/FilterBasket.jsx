import * as _ from 'lodash';
import React from 'react';
import CurrencyPicker from './components/CurrencyPicker';

import './FilterBasket.scss';

class FilterBasket extends React.Component {
    render() {
        return (
            <div className="filter-basket">
                <CurrencyPicker />
            </div>
        );
}
}

export default FilterBasket;

import * as _ from 'lodash';
import React from 'react';
import CurrencyPicker from './components/CurrencyPicker/CurrencyPicker';
import DirectionFilter from './components/DirectionFilter/DirectionFilter';

import './FilterBasket.scss';

class FilterBasket extends React.Component {
    render() {
        const { stops } = this.props;
        return (
            <div className="filter-basket">
                <CurrencyPicker />
                <DirectionFilter
                    stops={stops}
                />
            </div>
        );
}
}

export default FilterBasket;

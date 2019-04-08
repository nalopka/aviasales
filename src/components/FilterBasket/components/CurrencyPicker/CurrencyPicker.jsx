import * as _ from 'lodash';
import React from 'react';

import './CurrencyPicker.scss';

class CurrencyPicker extends React.Component {
    state = {
      currency: 'rub'
    };
    Currency = (props) => {
        const { type, onChange, checked } = props;
        const isChecked = _.isEqual(type, checked);
        const inputClassName = `radio-button ${isChecked ? 'radio-button-checked' : ''}`;
        return (
            <label className={inputClassName}
            >
                <input
                    type="radio"
                    name="currency"
                    value={type}
                    checked={isChecked}
                    onClick={(e) => onChange(e)}
                    onChange={()=>{}}/>
                <span>{type}</span>
            </label>
        )

    };

    handleOnChange = (e) => {
        const currency = e.target.value;
        this.setState({currency});
    };

    render() {
        const { currency } = this.state;
        return (
            <div className="currency-change">
                <p className="title">Валюта</p>
                <div className="currency-picker">
                    <this.Currency
                        type="rub"
                        onChange={this.handleOnChange}
                        checked={currency}
                    />
                    <this.Currency
                        type="usd"
                        onChange={this.handleOnChange}
                        checked={currency}
                    />
                    <this.Currency
                        type="eur"
                        onChange={this.handleOnChange}
                        checked={currency}
                    />
                </div>
            </div>
        );
    }
}

export default CurrencyPicker;

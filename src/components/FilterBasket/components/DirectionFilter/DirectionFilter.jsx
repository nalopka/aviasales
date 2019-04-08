import React from 'react';
// mr ../../.. - webpack 1 : 0 me ;/
import { declOfNum } from '../../../../utils/utils';

import './DirectionFilter.scss';

class DirectionFilter extends React.Component {
    renderCheckboxes = () => {
        let items = [];
        const { stops } = this.props;
        for (let i = 0; i < stops; i++) {
                items.push(
                    <label className="checkbox-label">
                        <input type="checkbox" />
                    <span className="checkmark"/>
                    {declOfNum(i, ['пересадка','пересадки', 'пересадок'])}
                        <span className="only">только</span>
                    </label>);
        }
        return items;
    };
    render() {

        return (
            <div className="transfer-count">
                <p className="title">Количество пересадок</p>
                <div className="transfer-count-filter">
                    <label className="checkbox-label">
                        <input type="checkbox" />
                        <span className="checkmark"/>
                        Все
                        <span className="only">только</span>
                    </label>
                    <label className="checkbox-label" >
                        <input type="checkbox" checked/>
                        <span className="checkmark"/>
                        Без пересадок
                        <span className="only">только</span>
                    </label>
                    {/*TODO: Ключи Math.random - зло*/}
                    { this.renderCheckboxes().map(i => <div key={Math.random()}>{i}</div>)}
                </div>
            </div>
        );
    }
}

export default DirectionFilter;

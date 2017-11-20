import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonItem from './ButtonItem.js'

class FilterButtons extends Component {
    render() {
        return (
            <div className="filter-buttons">
                <ButtonItem key="housefilter" id="House" onClick={() => this.props.onButtonClick('house')} />
                <ButtonItem key="senatefilter" id="Senate "onClick={() => this.props.onButtonClick('senate')} />
            </div>
        );
    };
};

FilterButtons.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
}

export default FilterButtons;
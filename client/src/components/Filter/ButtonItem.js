import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonItem extends Component {
    render() {
        return (
            <button type="button" className="btn btn-primary" onClick={this.props.onClick}>{this.props.id}</button>
        );
    };
};

ButtonItem.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default ButtonItem;

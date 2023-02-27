import PropTypes from 'prop-types';
import React from 'react';


export class Notification extends React.Component {
    render() {
        return (<p>
            {this.props.message}
        </p>
        );
    }
}

Notification.propTypes = {
    message: PropTypes.string.isRequired
}
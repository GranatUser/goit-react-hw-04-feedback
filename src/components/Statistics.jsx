import PropTypes from 'prop-types';
import React from 'react';

export class Statistics extends React.Component {
    render() {
        return (
            <ul>
                <li><p>Good: {this.props.good}</p></li>
                <li><p>Neutral: {this.props.neutral}</p></li>
                <li><p>Bad: {this.props.bad}</p></li>
                <li><p>Total: {this.props.total}</p></li>
                <li><p>Positive Feedback: {this.props.positivePercentage}%</p></li>
            </ul>
        );
    }
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number
}
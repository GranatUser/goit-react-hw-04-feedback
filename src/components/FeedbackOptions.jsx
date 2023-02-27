import PropTypes from 'prop-types';
import React from 'react';

export class FeedbackOptions extends React.Component {
    render() {
        return (
            <ul onClick={this.props.onLeaveFeedback}>
                {this.props.options.map((option) => {
                    return (<button type="button" key={option}>{option}</button>);
                })}
            </ul>
        );
    }
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}
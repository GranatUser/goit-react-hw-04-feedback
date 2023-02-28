import PropTypes from 'prop-types';

export function FeedbackOptions(props) {
    return (
        <ul onClick={props.onLeaveFeedback}>
            {props.options.map((option) => {
                return (<button type="button" key={option}>{option}</button>);
            })}
        </ul>
    );
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}
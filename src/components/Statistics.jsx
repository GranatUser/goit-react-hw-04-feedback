import PropTypes from 'prop-types';

export function Statistics(props) {
    return (
        <ul>
            <li><p>Good: {props.good}</p></li>
            <li><p>Neutral: {props.neutral}</p></li>
            <li><p>Bad: {props.bad}</p></li>
            <li><p>Total: {props.total}</p></li>
            <li><p>Positive Feedback: {props.positivePercentage}%</p></li>
        </ul>
    );
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number
}
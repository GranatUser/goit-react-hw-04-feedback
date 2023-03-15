import PropTypes from 'prop-types';

export function Notification(props) {

    return (
        <p>{props.message}</p>
    );
}

Notification.propTypes = {
    message: PropTypes.string.isRequired
}
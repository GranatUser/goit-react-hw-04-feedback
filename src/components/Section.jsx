import PropTypes from 'prop-types';

export function Section(props) {
    return (
        <section>
            <h2>{props.title}</h2>
            {props.children}
        </section>
    );
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}
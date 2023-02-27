import PropTypes from 'prop-types';
import React from 'react';



export class Section extends React.Component {
    render() {
        return (
            <section>
                <h2>{this.props.title}</h2>
                {this.props.children}
            </section>
        );
    }
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}
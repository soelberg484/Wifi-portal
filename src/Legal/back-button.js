import React, { Component } from 'react';
import '../Legal/back-button.scss'


class BackButton extends Component {
    render() {
        return (
            <button className="back-button" onClick={() => this.props.backButton()}>
                        Close
                    </button>
        );
    }
}

export default BackButton;
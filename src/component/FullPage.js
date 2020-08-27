import React, { Component } from 'react';
import './FullPage.css';

class FullPage extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className={`fullpage ${this.props.className || ''}`} style={{ backgroundColor: this.props.color }}>
                {children}
            </div>
        )
    }
}

export default FullPage;
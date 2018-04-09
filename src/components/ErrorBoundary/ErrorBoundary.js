import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false
    }

    componentDidCatch(error, info) {
        this.setState({
            hasError: true
        });
    }

    rendrt() {
        if(this.state.hasError) {
            return <h1>Oops, Looks like Something went Wrong</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;
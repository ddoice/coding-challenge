import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false }

  componentDidCatch(error, info) {
    console.log('error=', error);
    const { message, stack } = error;
    this.setState({ hasError: true, message, stack });
    // --> send to reporting service;
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Error code: 500</h1>
          <p>Ha ocurrido un error.</p>
          <p>Si el problema persiste, por favor contacta con un administrador.</p>
          {this.state.message}
          {this.state.stack}
        </div>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
// src/components/WithLogging.js
import React, { Component } from 'react';

const WithLogging = (WrappedComponent) => {
  class WithLoggingComponent extends Component {
    componentDidMount() {
      console.log(`${WrappedComponent.name} is rendered.`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return WithLoggingComponent;
};

export default WithLogging;

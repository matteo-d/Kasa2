import React from 'react';
import { Navigate } from 'react-router-dom'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  componentDidCatch() {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
       return <Navigate to="/error" />
    }
    return this.props.children;
  }
}

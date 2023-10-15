import { Component, ErrorInfo } from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log('ErrorBoundary caught an error', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>There is an Error, List could not be displayed</h2>
          <Link to="/">Click here to go back to the home page</Link>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

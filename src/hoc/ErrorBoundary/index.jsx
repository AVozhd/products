import React from "react";
import cn from "classnames";

import styles from "./ErrorBoundary.module.css";

class ErrorBoundary extends React.PureComponent {
  state = {
    hasError: false,
    errorMessage: ""
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      errorMessage: "Something went wrong!\nWe will fix this soon!"
    });
  }

  render() {
    const { children, className } = this.props;
    const { hasError, errorMessage } = this.state;

    return hasError ? (
      <div className={cn(styles.ErrorBoundary, className)}>
        <h1>{errorMessage}</h1>
      </div>
    ) : (
      children
    );
  }
}

export default ErrorBoundary;

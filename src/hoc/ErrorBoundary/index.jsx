import React from "react";
import cn from "classnames";

import styles from "./ErrorBoundary.module.scss";

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

    const error = (
      <div className={cn(styles.ErrorBoundary, className)}>
        <h1>{errorMessage}</h1>
      </div>
    );

    return hasError ? error : children;
  }
}

export default ErrorBoundary;

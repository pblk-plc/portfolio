import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = { children: ReactNode };
type State = { hasError: boolean };

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "var(--space-lg)", textAlign: "center" }}>
          <h2>Something went wrong</h2>
          <p>An unexpected error occurred.</p>
          <Link to="/" onClick={() => this.setState({ hasError: false })}>
            Go home
          </Link>
        </div>
      );
    }
    return this.props.children;
  }
}

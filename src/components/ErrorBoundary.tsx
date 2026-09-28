import { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-charcoal px-6 text-center">
          <div>
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl border-2 border-gold">
              <span className="font-serif text-2xl font-bold text-gold">JK</span>
            </div>
            <h1 className="font-serif text-2xl font-bold text-white">Something went wrong</h1>
            <p className="mt-3 text-white/60">Please refresh the page or call 7499418451.</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-charcoal"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

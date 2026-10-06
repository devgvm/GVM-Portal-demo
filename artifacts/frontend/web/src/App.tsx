import { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Activity, CircleDashed, RefreshCw } from 'lucide-react';
import { useHealthCheck } from '@workspace/api-client-react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

const queryClient = new QueryClient();

function Home() {
  const healthCheck = useHealthCheck();
  const isConnected = Boolean(healthCheck.data);

  return (
    <div className="portal-shell min-h-[100dvh] w-full">
      <header className="portal-header" data-testid="header-portal">
        <div className="portal-brand" data-testid="text-brand">
          <span className="portal-brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="portal-brand-name">GVM Portal</span>
        </div>
        <div className="portal-header-meta" data-testid="text-shell-label">
          <span className="portal-meta-dot" aria-hidden="true" />
          <span>Initial shell</span>
          <span className="portal-meta-divider" aria-hidden="true" />
          <span className="portal-mono">v0.1</span>
        </div>
      </header>

      <main className="portal-main">
        <div className="portal-intro">
          <div className="portal-kicker">
            <CircleDashed size={15} strokeWidth={1.8} aria-hidden="true" />
            <span>Scaffold status</span>
          </div>
          <h1 data-testid="text-page-title">
            A clear space for<br />
            <em>what comes next.</em>
          </h1>
          <p data-testid="text-requirements-status">
            GVM Portal is ready for product requirements. No product areas,
            records, or workflows have been defined yet.
          </p>
        </div>

        <section className="portal-status-card" aria-labelledby="connectivity-title">
          <div className="portal-card-heading">
            <div>
              <p className="portal-card-eyebrow">System check</p>
              <h2 id="connectivity-title">API connectivity</h2>
            </div>
            <div
              className={`portal-status-badge ${isConnected ? 'is-connected' : healthCheck.isError ? 'is-error' : 'is-checking'}`}
              data-testid="status-api-connectivity"
            >
              <span className="portal-status-badge-dot" aria-hidden="true" />
              {isConnected ? 'Responding' : healthCheck.isError ? 'Unavailable' : 'Checking'}
            </div>
          </div>

          <div className="portal-card-rule" />

          <div className="portal-status-row">
            <div className="portal-status-icon" aria-hidden="true">
              <Activity size={18} strokeWidth={1.7} />
            </div>
            <div className="portal-status-copy">
              <span className="portal-status-label">GET /api/healthz</span>
              {healthCheck.isLoading ? (
                <span className="portal-skeleton" data-testid="skeleton-api-status" />
              ) : healthCheck.isError ? (
                <span className="portal-status-value is-muted" data-testid="text-api-error">
                  The backend did not respond
                </span>
              ) : (
                <span className="portal-status-value" data-testid="text-api-status">
                  {healthCheck.data?.status ?? 'No status returned'}
                </span>
              )}
            </div>
            <span className="portal-status-code portal-mono" data-testid="text-api-method">
              GET
            </span>
          </div>

          {healthCheck.isError && (
            <button
              type="button"
              className="portal-retry-button"
              onClick={() => void healthCheck.refetch()}
              data-testid="button-retry-health-check"
            >
              <RefreshCw size={14} strokeWidth={2} aria-hidden="true" />
              Retry connection
            </button>
          )}
        </section>

        <div className="portal-footer-note" data-testid="text-footer-note">
          <span className="portal-footer-line" aria-hidden="true" />
          <span>Product requirements pending</span>
        </div>
      </main>

      <footer className="portal-footer" data-testid="footer-portal">
        <span>GVM Portal</span>
        <span className="portal-footer-status">
          <span className="portal-footer-status-dot" aria-hidden="true" />
          Shell online
        </span>
      </footer>
    </div>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
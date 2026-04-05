import { Routes, Route } from "react-router-dom";

/**
 * App — Root component
 * Handles top-level routing and layout.
 * Pages will be added as the app grows.
 */
export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-950/80 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5">
            <span className="text-2xl" role="img" aria-label="shield">
              🛡️
            </span>
            <span className="text-lg font-bold tracking-tight text-white">
              MailSentry
            </span>
          </a>

          {/* Nav links — placeholder for future pages */}
          <div className="hidden items-center gap-6 sm:flex">
            <a
              href="/dashboard"
              className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
            >
              Dashboard
            </a>
            <a
              href="/analyse"
              className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
            >
              Analyse
            </a>
            <a
              href="/reports"
              className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
            >
              Reports
            </a>
          </div>

          {/* Auth button placeholder */}
          <button
            type="button"
            className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-700 focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
          >
            Sign In
          </button>
        </nav>
      </header>

      {/* Main content area */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-gray-500 sm:px-6 lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} MailSentry &mdash; Enterprise
            Phishing Analysis Platform
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ─── Inline page components (will be extracted to /pages later) ───── */

function HomePage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
        Detect phishing.{" "}
        <span className="text-brand-500">Protect your team.</span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
        MailSentry analyses emails in real time using multi-source threat
        intelligence. Neutralise dangerous links before they reach your inbox.
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href="/analyse"
          className="inline-flex items-center rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 hover:shadow-brand-600/40"
        >
          Analyse an Email
        </a>
        <a
          href="/dashboard"
          className="inline-flex items-center rounded-lg border border-gray-700 bg-gray-900 px-6 py-3 text-sm font-semibold text-gray-300 transition-all hover:border-gray-600 hover:text-white"
        >
          View Dashboard
        </a>
      </div>

      {/* Threat level preview cards */}
      <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="card flex flex-col items-center gap-2 py-4">
          <span className="badge-safe">Safe</span>
          <span className="text-xs text-gray-500">No threats</span>
        </div>
        <div className="card flex flex-col items-center gap-2 py-4">
          <span className="badge-caution">Caution</span>
          <span className="text-xs text-gray-500">Review needed</span>
        </div>
        <div className="card flex flex-col items-center gap-2 py-4">
          <span className="badge-dangerous">Dangerous</span>
          <span className="text-xs text-gray-500">Link defanged</span>
        </div>
        <div className="card flex flex-col items-center gap-2 py-4">
          <span className="badge-critical">Critical</span>
          <span className="text-xs text-gray-500">Blocked &amp; logged</span>
        </div>
      </div>
    </section>
  );
}

function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-extrabold text-gray-700">404</h1>
      <p className="mt-4 text-lg text-gray-400">Page not found.</p>
      <a
        href="/"
        className="mt-6 text-sm font-medium text-brand-500 transition-colors hover:text-brand-400"
      >
        &larr; Back to Home
      </a>
    </section>
  );
}

import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import styles from "./tailwind.css";
import Header from "~/components/header"

// Links function for adding stylesheets or favicons
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

// Meta function for setting default meta tags
export const meta: MetaFunction = () => {
  return [
    { charset: "utf-8" },
    { title: "Cynco.io" },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-gray-50 text-gray-900">
        {/* Shared Header */}
        <Header />

        {/* Main Content Area */}
        <main className="min-h-screen p-4">
          <Outlet />
        </main>

        {/* Shared Footer */}
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>©{new Date().getFullYear()} Cynco.io All rights reserved.</p>
        </footer>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

// ErrorBoundary for catching errors
export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <html>
      <head>
        <title>Error</title>
      </head>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-red-100 text-red-800">
          <h1 className="text-2xl font-bold">Something went wrong!</h1>
          <pre className="mt-4">{error.message}</pre>
        </div>
        <Scripts />
      </body>
    </html>
  );
}

// CatchBoundary for handling 404 or other unexpected responses
export function CatchBoundary() {
  return (
    <html>
      <head>
        <title>Not Found</title>
      </head>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-yellow-100 text-yellow-800">
          <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
        </div>
        <Scripts />
      </body>
    </html>
  );
}

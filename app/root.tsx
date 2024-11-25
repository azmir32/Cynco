import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";
import Header from "~/components/header";

// Remove the direct CSS import and use this instead
import styles from "./styles/app.css?url";

export const links: LinksFunction = () => [
  { 
    rel: "stylesheet",
    href: styles
  }
];

export const meta: MetaFunction = () => {
  return [
    { charset: "utf-8" },
    { title: "Cynco.io" },
    { viewport: "width=device-width,initial-scale=1" },
    { description: "Welcome to Cynco.io" },
  ];
};

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full bg-background text-foreground">
        <div className="flex min-h-screen flex-col">
          <Header />
          
          <main className="flex-1 p-4">
            <Outlet />
          </main>

          <footer className="bg-gray-800 p-4 text-center text-white">
            <p>©{new Date().getFullYear()} Cynco.io All rights reserved.</p>
          </footer>
        </div>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  
  let errorMessage: string;
  let errorStatus: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data?.message || 'An unexpected error occurred';
    errorStatus = `${error.status} ${error.statusText}`;
  } else if (error instanceof Error) {
    errorMessage = error.message;
    errorStatus = 'Error';
  } else {
    errorMessage = 'An unexpected error occurred';
    errorStatus = 'Error';
  }

  return (
    <html lang="en" className="h-full">
      <head>
        <title>Error - Cynco.io</title>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <div className="flex min-h-screen flex-col items-center justify-center bg-destructive/10 p-6">
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h1 className="mb-4 text-2xl font-bold text-destructive">{errorStatus}</h1>
            <p className="text-gray-600">{errorMessage}</p>
            <a
              href="/"
              className="mt-6 inline-block rounded bg-primary px-4 py-2 text-white hover:bg-primary/90"
            >
              Return Home
            </a>
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
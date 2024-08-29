import { json, Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData, useRouteError } from '@remix-run/react';
import './tailwind.css';
import { captureRemixErrorBoundaryError } from '@sentry/remix';

export const ErrorBoundary = () => {
  const error = useRouteError();

  captureRemixErrorBoundaryError(error);
  return <>error</>;
};

export async function loader() {
  return json({ variable: process.env.SENTRY_DSN });
}

export function Layout({ children }: { children: React.ReactNode }) {
  const { variable } = useLoaderData<typeof loader>();
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script dangerouslySetInnerHTML={{ __html: `window.SENTRY_DSN = '${variable}'` }}></script>
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

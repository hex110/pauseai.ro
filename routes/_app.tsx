import { AppProps } from "$fresh/server.ts";
import { Head as _Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>PauseAI Romania</title>
        <meta
          name="description"
          content="Împreună pentru un viitor sigur cu AI"
        />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}

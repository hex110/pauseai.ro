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
        
        <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
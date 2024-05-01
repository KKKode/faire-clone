import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/faire-favicon.webp" />
        <meta
          name="subject"
          content="Faire helps local stores discover and try thousands of unique items risk-free."
        />
        <meta name="copyright" content="Faire-Clone" />
        <meta
          name="category"
          content="Faire helps local stores discover and try thousands of unique items risk-free."
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="author" content="Faire-Clone, faireclone@gmail.com" />
        <meta name="designer" content="Faire-Clone" />
        <meta name="owner" content="Faire-Clone" />
        <meta name="language" content="ES" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

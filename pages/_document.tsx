import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html className="scroll-smooth">
      <Head>
        <Script
          id="laureate-theme"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              JSON.parse(localStorage.getItem("isDark"))
                ? document.documentElement.classList.add('dark')
                : document.documentElement.classList.remove('dark');
              `,
          }}
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Default favicon */}
        <link rel="icon" href="/favicon-light.png" type="image/png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function setFavicon() {
                const isDarkMode =
                  window.matchMedia &&
                  window.matchMedia('(prefers-color-scheme: dark)').matches;

                let favicon = document.querySelector("link[rel='icon']");

                if (!favicon) {
                  favicon = document.createElement('link');
                  favicon.rel = 'icon';
                  document.head.appendChild(favicon);
                }

                if (isDarkMode) {
                  favicon.href = '/favicon-dark.png';
                } else {
                  favicon.href = '/favicon-light.png';
                }
              }

              setFavicon();

              window
                .matchMedia('(prefers-color-scheme: dark)')
                .addEventListener('change', setFavicon);
            `,
          }}
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import { Html, Head, Main, NextScript } from 'next/document';

/* Blocking script to prevent flash of wrong theme mode before React hydrates */
const blockingScript = `
(function() {
  try {
    var mode = localStorage.getItem('terminal-portfolio-mode');
    if (!mode) mode = 'dark';
    var root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(mode);
  } catch(e) {}
})();
`;

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        {/* Blocking script to prevent flash of wrong theme */}
        <script dangerouslySetInnerHTML={{ __html: blockingScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;

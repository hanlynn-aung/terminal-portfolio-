import React from 'react';
import '../styles/global.css';
import Head from 'next/head';
import { getStoredTheme, getStoredMode, applyTheme } from '../utils/theme';

interface AppProps {
  Component: React.ComponentType<any>;
  pageProps: Record<string, unknown>;
}

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickAnywhere = () => {
    inputRef.current?.focus();
  };

  // Apply stored theme on mount (fallback if blocking script didn't run)
  React.useEffect(() => {
    applyTheme(getStoredTheme(), getStoredMode());
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
          key="viewport"
        />
      </Head>
      <div
        className="text-themed-foreground w-full text-sm xs:text-base md:text-lg"
        onClick={onClickAnywhere}
      >
        <main className="bg-themed-background w-full h-full p-1.5 sm:p-4 md:p-6">
          <Component {...pageProps} inputRef={inputRef} />
        </main>
      </div>
    </>
  );
};

export default App;

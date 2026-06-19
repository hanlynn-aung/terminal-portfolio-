import Head from 'next/head';
import React from 'react';
import config from '../../config.json';
import { Input } from '../components/input';
import { useHistory } from '../components/history/hook';
import { History } from '../components/history/History';
import { banner } from '../utils/bin';

interface IndexPageProps {
  inputRef: React.MutableRefObject<HTMLInputElement>;
}

const IndexPage: React.FC<IndexPageProps> = ({ inputRef }) => {
  const containerRef = React.useRef(null);
  const {
    history,
    command,
    lastCommandIndex,
    setCommand,
    setHistory,
    clearHistory,
    setLastCommandIndex,
  } = useHistory([]);

  const init = React.useCallback(() => setHistory(banner()), []);

  React.useEffect(() => {
    init();
  }, [init]);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView();
      inputRef.current.focus({ preventScroll: true });
    }
  }, [history]);

  const siteUrl = 'https://hanlynn-aung.vercel.app';
  const description = `Interactive terminal portfolio of ${config.name} — Java Software Engineer at KBZ Bank. Explore projects, skills, and experience via a CLI-inspired interface.`;

  return (
    <>
      <Head>
        <title>{config.title}</title>
        <meta name="description" content={description} key="desc" />
        <meta name="author" content={config.name} />
        <meta name="keywords" content="Java, Spring Boot, developer, portfolio, backend, KBZ Bank, Han Lynn Aung" />

        {/* Open Graph */}
        <meta property="og:title" content={config.title} key="og-title" />
        <meta property="og:description" content={description} key="og-desc" />
        <meta property="og:type" content="website" key="og-type" />
        <meta property="og:url" content={siteUrl} key="og-url" />
        <meta property="og:image" content={`${siteUrl}/han-lynn-aung.jpg`} key="og-image" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
        <meta property="og:site_name" content={config.name} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" key="tw-card" />
        <meta name="twitter:title" content={config.title} key="tw-title" />
        <meta name="twitter:description" content={description} key="tw-desc" />
        <meta name="twitter:image" content={`${siteUrl}/han-lynn-aung.jpg`} key="tw-image" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: config.name,
              jobTitle: 'Java Software Engineer',
              email: config.email,
              url: siteUrl,
              sameAs: [
                `https://github.com/${config.social.github}`,
                `https://linkedin.com/in/${config.social.linkedin}`,
              ],
              knowsAbout: [
                'Java', 'Spring Boot', 'React', 'PostgreSQL',
                'MySQL', 'MongoDB', 'Oracle', 'Redis',
                'Docker', 'AWS', 'REST APIs', 'System Integration',
              ],
            }),
          }}
        />
      </Head>

      <div className="p-2 sm:p-5 md:p-7 overflow-hidden h-full border-2 rounded-lg border-themed-yellow">
        <div ref={containerRef} className="overflow-y-auto h-full overflow-x-hidden">
          <History history={history} />
          <Input
            inputRef={inputRef}
            containerRef={containerRef}
            command={command}
            history={history}
            lastCommandIndex={lastCommandIndex}
            setCommand={setCommand}
            setHistory={setHistory}
            setLastCommandIndex={setLastCommandIndex}
            clearHistory={clearHistory}
          />
        </div>
      </div>
    </>
  );
};

export default IndexPage;

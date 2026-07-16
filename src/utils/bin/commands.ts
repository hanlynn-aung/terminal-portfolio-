// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';
import { getProjects, getWeather, getQuote, getQuoteByAuthor } from '../api';
import { getStoredTheme, getStoredMode, getThemeNames, setTheme, setMode } from '../theme';

// Help
export const help = async (args: string[]): Promise<string> => {
  const sortedCommands = Object.keys(bin).sort();
  const columns = 7;
  const colWidth = 16; // adjust width to fit your longest command comfortably
  let output = '';

  for (let i = 0; i < sortedCommands.length; i++) {
    // pad command to fixed width
    output += sortedCommands[i].padEnd(colWidth, ' ');

    // newline after every 'columns' commands
    if ((i + 1) % columns === 0) {
      output += '\n';
    }
  }

  // add newline if last line incomplete
  if (sortedCommands.length % columns !== 0) {
    output += '\n';
  }

  return `Welcome! Here are all the available commands:

${output}

[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.

Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}, a Java Software Engineer with a passion for building scalable, high-performance backend systems.

Experienced in designing robust APIs, integrating complex systems, and ensuring data integrity and reliability. Known for strong problem-solving skills, keen attention to detail, and a collaborative, team-oriented mindset. Committed to delivering clean, efficient, and high-quality code that drives impactful results.

📋 Projects & Contributions:
- Contributed to Dispute & Chargeback, Agency Banking, and Eaxi Account Withdrawal projects, delivering reliable and scalable backend solutions.
- Collaborated with cross-functional teams to implement integrations, resolve technical issues, and ensure smooth project delivery.
- Ensured high system performance, maintainability, and timely completion of project milestones.

📍 2025 Sep - Current | KBZ Bank

More about me:
  'sumfetch' - short summary.
  'cv' - my latest CV.
  'resume' - my latest resume.
  'readme' - my GitHub readme.
`;
};

export const readme = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}`);
  return `Opening GitHub README...`;
};


export const cv = async (args: string[]): Promise<string> => {
  window.open(`${config.cv_url}`);
  return 'Opening cv...';
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
// export const donate = async (args: string[]): Promise<string> => {
//   return `thank you for your interest.
// here are the ways you can support my work:
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
// `;
// };

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `about      readme       jobprojects      myprojects    skills      cv        resume
github     linkedin     sumfetch         weather       help      theme     quote`;
};

// export const cd = async (args: string[]): Promise<string> => {
//   return `unfortunately, I cannot afford more directories.
// if you want to help, you can type 'donate'.`;
// };

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

export const jobprojects = async (args: string[]): Promise<string> => {
  return `Here are the projects I've worked on:


1. 🏦 Agency Banking Project
   - Spearheaded integration of core banking systems, ensuring high reliability and zero data loss during transaction failures.
   - Identified and resolved structural bottlenecks, significantly improving application speed, throughput, and overall performance.
   - Addressed complex concurrency challenges, ensuring safe, accurate, and stable processing of simultaneous user transactions.
   - Coordinated deployment of critical backend services, including secure user authentication and external notification systems.
   - Designed and implemented highly scalable database architectures, supporting large-scale daily operations and robust transaction tracking.

2. ⚖️ Dispute & Chargeback Project
   - Successfully delivered a centralized Dispute & Chargeback platform, streamlining support workflows and modernizing case management.
   - Collaborated with stakeholders and cross-functional teams to translate complex banking and compliance requirements into an intuitive, automated tracking system.
   - Increased operational efficiency by automating critical workflows, including document processing, case escalations, and status notifications.
   - Ensured high data accuracy and reliability by integrating the platform with multiple core enterprise systems.
   - Empowered leadership with real-time dashboards and automated reporting for enhanced visibility into operational metrics.

3. 🏆 Loyalty & Rewards Point Project
   - Developed and integrated APIs for the Loyalty and Rewards Point system across G&G, Capital, and Panamax.
   - Ensured data accuracy and resolved discrepancies with QA, product, data, and finance teams.
   - Mentored interns and trainees, sharing technical knowledge and project insights.
   - Delivered a fully functional, integrated system on schedule.
   - Improved reporting accuracy and operational efficiency, earning recognition from stakeholders.

4. 🛢️ Edible Oil E-Governance Platform
   - Developed and integrated APIs to support core system functionality and ensure smooth operations.
   - Designed and managed a robust quota tracking system, improving accuracy and timeliness for merchants.
   - Standardized data across platforms and integrated with Taw Win Akariz, CTZ Pay, and Panamax.
   - Ensured accurate reporting and data analysis for merchants, retailers, and households to support decision-making.
   - Mentored management trainees and interns, sharing technical knowledge and delivering the project on schedule.

5. 🛒 Merchant Portal Project
   - Contributed to Merchant Portal using Java, Spring Boot, and Redis, focusing on backend development.
   - Developed and maintained user management functionality, ensuring secure and efficient operations.
   - Implemented report download features, providing accurate and timely data access for stakeholders.
   - Collaborated with cross-functional teams to integrate systems and resolve technical issues.
   - Ensured high system performance, reliability, and maintainability, meeting project deadlines.

Type 'about' to learn more about my experience.
`;
};

export const skills = async (args: string[]): Promise<string> => {
  return `Here are some of my key technical skills:

💻 Languages:
- Java, JavaScript, SQL

🚀 Frameworks & Libraries:
- Spring Boot, React, Thymeleaf

🗄️ Databases:
- PostgreSQL, MySQL, MongoDB, Oracle

⚡ Cache & Data:
- Redis

🛠️ Tools:
- Docker, Git

☁️ Cloud:
- AWS

🤖 Emerging Tech:
- AI

Type 'cv' to open my resume or 'sumfetch' for a quick summary.
`;
};

// Theme
export const theme = async (args: string[]): Promise<string> => {
  if (args.length === 0) {
    const currentTheme = getStoredTheme();
    const currentMode = getStoredMode();
    const names = getThemeNames();
    return `Current theme: ${currentTheme} (${currentMode})

Usage:
  theme <name>    Switch to a named color scheme
  theme light     Switch to light mode
  theme dark      Switch to dark mode

Available themes:
  ${names.join(', ')}

Type 'theme <name>' to preview a theme.`;
  }

  const arg = args[0].toLowerCase();

  // Toggle light/dark mode
  if (arg === 'light' || arg === 'dark') {
    setMode(arg);
    return `🌗 Switched to ${arg} mode`;
  }

  // Switch named theme
  const names = getThemeNames();
  const match = names.find((n) => n.toLowerCase() === arg);
  if (match) {
    setTheme(match);
    return `🎨 Theme switched to ${match}`;
  }

  return `Unknown theme: "${arg}".
Available themes: ${names.join(', ')}`;
};

//weather
export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');
  if (!city) {
    return 'Usage: weather [city]. Example: weather casablanca';
  }
  const weather = await getWeather(city);
  return weather;
};

interface GitHubRepo {
  name: string;
  html_url: string;
  [key: string]: unknown;
}

export const myprojects = async (args: string[]): Promise<string> => {
  const projects: GitHubRepo[] = await getProjects();
  return projects
    .map(
      (repo: GitHubRepo) =>
        `${repo.name} - <a class="text-themed-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`,
    )
    .join('\n');
};

export const quote = async (args: string[]): Promise<string> => {
  // Check for --author or -a flag
  const authorIdx = args.indexOf('--author');
  const shortAuthorIdx = args.indexOf('-a');
  const flagIdx = authorIdx !== -1 ? authorIdx : shortAuthorIdx;

  if (flagIdx !== -1) {
    const authorName = args.slice(flagIdx + 1).join(' ').trim();
    if (!authorName) {
      return 'Usage: quote --author <name> or quote -a <name>\nExample: quote --author Einstein';
    }
    try {
      const data = await getQuoteByAuthor(authorName);
      if (data) {
        return data.quote;
      }
      return `No quotes found for author "${authorName}". Try a different name or just type 'quote' for a random quote.`;
    } catch {
      return 'Failed to fetch quotes. Try again later.';
    }
  }

  try {
    const data = await getQuote();
    return data.quote;
  } catch {
    return 'Failed to fetch a quote. Try again later.';
  }
};

// Banner
export const banner = (args?: string[]): string => {
  const headshotUrl = '/han-lynn-aung.jpg';

  return `
<div class="banner-container">
  <img 
    src="${headshotUrl}" 
    alt="Headshot" 
    class="banner-image"
  />
  <pre class="banner-text">
██╗░░██╗░█████╗░███╗░░██╗  ██╗░░░░░██╗░░░██╗███╗░░██╗███╗░░██╗  ░█████╗░██╗░░░██╗███╗░░██╗░██████╗░
██║░░██║██╔══██╗████╗░██║  ██║░░░░░╚██╗░██╔╝████╗░██║████╗░██║  ██╔══██╗██║░░░██║████╗░██║██╔════╝░
███████║███████║██╔██╗██║  ██║░░░░░░╚████╔╝░██╔██╗██║██╔██╗██║  ███████║██║░░░██║██╔██╗██║██║░░██╗░
██╔══██║██╔══██║██║╚████║  ██║░░░░░░░╚██╔╝░░██║╚████║██║╚████║  ██╔══██║██║░░░██║██║╚████║██║░░╚██╗
██║░░██║██║░░██║██║░╚███║  ███████╗░░░██║░░░██║░╚███║██║░╚███║  ██║░░██║╚██████╔╝██║░╚███║╚██████╔╝
╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝  ╚══════╝░░░╚═╝░░░╚═╝░░╚══╝╚═╝░░╚══╝  ╚═╝░░╚═╝░╚═════╝░╚═╝░░╚══╝░╚═════╝░
  </pre>
</div>

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a href="${config.repo}" target="_blank">here</a></u> for the Terminal Portfolio Github repository.
`;
};

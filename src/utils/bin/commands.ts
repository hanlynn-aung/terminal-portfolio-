// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';
import { getProjects, getWeather } from '../api';

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
  return `Hi, I am ${config.name}, a Java Software Engineer currently working at Capital Diamond Star Group.

I focus on building scalable backend systems, with hands-on experience in:
- Loyalty and Reward Point System
- Edible Oil E-Governance Project
- API Development, System Integration, and Performance Optimization

Tech stack: Java, Spring Boot, React, MySQL, PostgreSQL, MongoDB, Docker.

More about me:
  'sumfetch' - short summary.
  'cv' - my latest CV.
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
  return `about      readme       jobprojects      myprojects    skills      cv     
github     linkedin     sumfetch         weather       help`;
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
  return `Here are a few projects I've worked on:

1. 🏆 Loyalty & Reward Point System
   - Developed core APIs
   - Integrated with G&G, Capital, and Panamax
   - Improved data accuracy and reporting

2. 🛢️ Edible Oil E-Governance Platform
   - Developed core APIs
   - Integrated with Taw Win Akariz, CTZ Pay, Panamax
   - Built quota tracking and reporting
   - Standardized data and mentored trainees

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
- PostgreSQL, MySQL, MongoDB

🛠️ Tools:
- Docker, Git

Type 'cv' to open my resume or 'sumfetch' for a quick summary.
`;
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

export const myprojects = async (args: string[]): Promise<string> => {
  const projects = await getProjects();
  return projects
    .map(
      (repo) =>
        `${repo.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`,
    )
    .join('\n');
};

// export const quote = async (args: string[]): Promise<string> => {
//   const data = await getQuote();
//   return data.quote;
// };

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

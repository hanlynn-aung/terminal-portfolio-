import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  const aboutText = `Java Backend Developer at Capital Diamond Star Group. 
                                               Working on Loyalty & Reward and E-Governance Projects. 
                                               Experienced in API development, system integration, and reporting.
                                               Tech: Java, Spring Boot, React, MySQL, PostgreSQL, MongoDB, Docker.`;

  if (config.ascii === 'cveinnt') {
    return `                                                  
             @@@@@@@@@@@@@                   sumfetch: summary display
        @@@@               @@@@             -----------           
      @@                       @@            ABOUT
    @@                           @@          ${config.name}
  @@                               @@       ﰩ ${config.ps1_hostname}
 @@                         @@@     @@       ${aboutText}
 
@@        @@@                        @@      <u><a href="${config.cv_url}" target="_blank">cv</a></u>
@@                                   @@     爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
@@             .@@@@@@@@@@.          @@     -----------           
 @@           @@          @@        @@       CONTACT 
  @@           @@        @@        @@        <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
   @@             @@@@@@          @@         <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
     @@@                        @@@          <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
        @@@                  @@@ @@         -----------           
         @|  @@@@@@@@@@@@@@@@   @@          
         @|                      @@         
`;
  } else {
    return `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                  sumfetch
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              -----------
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             ABOUT
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            ${config.name}
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓           ${aboutText}
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓        <u><a href="${config.cv_url}" target="_blank">CV</a></u>
▐▓                                 ▐▓       爵 <u><a href="${config.repo}" target="_blank">Terminal Portfolio repo </a></u>
▐▓    (-__-)    Han Lynn Aung      ▐▓       -----------
▐▓                                 ▐▓        CONTACT 
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓        <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓           <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀            -----------
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀              
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                  
`;
  }
};

export default sumfetch;

import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  const catImage = `
    <div class="cat-banner-container" role="img" aria-label="Cat Developer">
      <img
        src="/cat_dev.jpg"
        alt="Cat Developer"
        class="cat-banner-img"
        loading="lazy"
        decoding="async"
      />
    </div>
  `;

  const aboutText = `
    <div class="sumfetch-container" role="region" aria-labelledby="about-title">
      <p id="about-title"><strong>Java Backend Developer</strong> at Capital Diamond Star Group</p>
      <p>Working on Loyalty & Reward and E-Governance projects</p>
      <p>Skilled in API Development, System Integration, and Performance Optimization</p>
      <p>Tech Stack: Java, Spring Boot, React, MySQL, PostgreSQL, MongoDB, Docker</p>

      <p>📄 <u><a href="${config.cv_url}" target="_blank" rel="noopener noreferrer">Download CV</a></u></p>
      <p>📁 <u><a href="${config.repo}" target="_blank" rel="noopener noreferrer">Terminal Portfolio Repo</a></u></p>

      <br />
      <p>📞 <strong>CONTACT</strong></p>
      <p>✉️ <u><a href="mailto:${config.email}" target="_blank" rel="noopener noreferrer">${config.email}</a></u></p>
      <p>🐱 <u><a href="https://github.com/${config.social.github}" target="_blank" rel="noopener noreferrer">github.com/${config.social.github}</a></u></p>
      <p>💼 <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank" rel="noopener noreferrer">linkedin.com/in/${config.social.linkedin}</a></u></p>
    </div>
  `;

  return `
    <div class="sumfetch-wrapper banner-container">
      ${catImage}
      ${aboutText}
    </div>
  `;
};

export default sumfetch;

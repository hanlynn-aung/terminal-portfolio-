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
      <p id="about-title"><strong>Java Software Engineer</strong> at KBZ Bank</p>
      <p>Building scalable, high-performance backend systems</p>
      <p>Specializing in robust API design, system integration, and data reliability</p>

      <p><strong>📋 Key Projects:</strong></p>
      <p>🏦 Agency Banking · ⚖️ Dispute & Chargeback · 🏆 Loyalty & Rewards</p>
      <p>🛢️ E-Governance · 🛒 Merchant Portal</p>

      <p><strong>🛠️ Tech Stack:</strong></p>
      <p>Java, Spring Boot, React, Thymeleaf</p>
      <p>PostgreSQL, MySQL, MongoDB, Oracle, Redis</p>
      <p>Docker, Git, AWS</p>

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

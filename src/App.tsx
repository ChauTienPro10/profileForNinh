import './App.css'
import openmintLogo from './assets/Openmint.jpg'
import optimumLogo from './assets/Optimum.jpg'
import seismicLogo from './assets/Seismic.jpg'
import mimbokuLogo from './assets/Mimboku.png'
import myAvatar from './assets/myavatar.jpg'

function App() {
  return (
    <div className="page">
      {/* Background visual elements */}
      <div className="grid-bg" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <header className="nav">
        <div className="nav-left">
          <div className="logo-mark">
            <img
              src={myAvatar}
              alt="Snoopy avatar"
              className="logo-mark-img"
              onError={(e) => {
                const el = e.target as HTMLImageElement
                el.style.display = 'none'
              }}
            />
            {/* <span className="logo-initials">SN</span> */}
            <span className="logo-online" aria-hidden />
          </div>
          <div className="nav-title">
            <span className="nav-name">Snoopy</span>
            <span className="nav-role">On-chain Moderator • Ambassador • Content Creator</span>
          </div>
        </div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="content">
        {/* HERO */}
        <section className="hero" id="top">
          <div className="hero-left">
            <p className="eyebrow">Crypto • DeFi • Web3</p>
            <h1>
              <span className="accent">Communitiy Builder</span>
            </h1>
            <p className="hero-subtitle">
              I'm <span className="strong">Snoopy</span> – an on-chain{' '}
              <span className="strong">Moderator, Ambassador & Content Creator</span> building and nurturing
              communities for Web3 projects. I focus on{' '}
              <span className="strong">community safety, anti-scam protection and clear communication</span>{' '}
              while communicating project information in a clear, simple way.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn primary">
                View on-chain portfolio
              </a>
              <a href="#contact" className="btn ghost">
                Connect & Collaborate
              </a>
            </div>
            <div className="hero-metrics">
              <div className="metric">
                <span className="metric-value">2023 → now</span>
                <span className="metric-label">In Web3 market</span>
              </div>
              <div className="metric">
                <span className="metric-value">4+ dự án</span>
                <span className="metric-label">Moderator / Community Support</span>
              </div>
              <div className="metric">
                <span className="metric-value">24/7</span>
                <span className="metric-label">Protecting & supporting community</span>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="card profile-card">
              <div className="profile-header">
                <div className="logo-mark">
                  <img
                    src={myAvatar}
                    alt="Snoopy avatar"
                    className="logo-mark-img"
                    onError={(e) => {
                      const el = e.target as HTMLImageElement
                      el.style.display = 'none'
                    }}
                  />
                  {/* <span className="logo-initials">SN</span> */}
                  <span className="logo-online" aria-hidden />
                </div>
                <div>
                  <h2>Snoopy</h2>
                  <p>Onchain Moderator • Ambassador • Content Creator</p>
                </div>
              </div>
              <div className="profile-info">
                <div>
                  <span className="label">Focus</span>
                  <p>Community Safety, Engagement, Web3 Education</p>
                </div>
                <div>
                  <span className="label">Stack</span>
                  <p>EVM, DeFi, Bot Mod, Discord tools, X (Twitter)</p>
                </div>
                <div>
                  <span className="label">Hoạt động</span>
                  <p>Moderation, Crisis Handling, Event & Content Planning</p>
                </div>
              </div>
              <div className="profile-tags">
                <span>#DeFi</span>
                <span>#DEX</span>
                <span>#NFT</span>
                <span>#TradingBot</span>
                <span>#Risk</span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="section-header">
            <p className="eyebrow">Introduction</p>
            <h2>About me in the Crypto space</h2>
            <p className="section-description">
              With a background in mechanical engineering, I stepped into Web3 as a Moderator, Ambassador and Content
              Creator. My goal is to build safe, transparent communities and help newcomers understand Crypto the right
              way.
            </p>
          </div>
          <div className="about-grid">
            <div className="card about-block">
              <h3>Approach</h3>
              <p>
                Focus on building sustainable, transparent Web3 communities that are friendly for new users. Ensure
                information is clear, reduce scam/phishing risks and create a space where members can learn from each
                other about Crypto & DeFi.
              </p>
            </div>
            <div className="card about-block">
              <h3>Strengths</h3>
              <ul>
                <li>
                  On-chain moderation: quickly detect and handle spam, scam and FUD inside communities.
                </li>
                <li>
                  Web3 content: create content that helps newcomers understand project mechanics, DeFi and
                  products.
                </li>
                <li>
                  Crisis management: maintain consistent tone and calm the community during sensitive events.
                </li>
              </ul>
            </div>
            <div className="card about-block">
              <h3>Value I Bring</h3>
              <p>
                By combining user perspective, Web3 technical understanding and soft skills, I help teams build
                engaged communities, reduce pressure on the core team and maintain a consistent project image in
                users’ eyes.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="section-header">
            <p className="eyebrow">Projects</p>
            <h2>Web3 projects I have joined</h2>
            <p className="section-description">
              Here are some of the Web3 projects I am working with or have worked with as a Moderator, Ambassador
              and Content Creator.
            </p>
          </div>

          <div className="projects-grid">
            <article className="card project-card">
              <div className="project-header">
                <img src={openmintLogo} className="project-logo" alt="Openmind logo" />
                <div className="project-header-text">
                  <span className="pill defi">Community • AI / Robotics</span>
                  <h3>Openmind (Robotics)</h3>
                </div>
              </div>
              <p className="project-description">
                A community focused on Machine Learning and Robotics where members learn, share and stay updated on
                new technologies.
              </p>
              <ul className="project-details">
                <li>Time: 08/2024 – Present</li>
                <li>Role: Moderator</li>
                <li>
                  Achievements: Proactively support hundreds of questions daily, keep the community safe by
                  handling spam/scam, act as an information bridge between dev team and community, and organize
                  AMAs and mini games to boost engagement.
                </li>
              </ul>
              <div className="project-footer">
                <span>Role: Moderator</span>
              </div>
            </article>

            <article className="card project-card">
              <div className="project-header">
                <img src={optimumLogo} className="project-logo" alt="Optimum logo" />
                <div className="project-header-text">
                  <span className="pill nft">mump2p • Community</span>
                  <h3>Optimum</h3>
                </div>
              </div>
              <p className="project-description">
                A mump2p project with a dynamic community, focusing on user experience and on-chain activities.
              </p>
              <ul className="project-details">
                <li>Time: 04/2024 – Present</li>
                <li>Role: Content creator & community support</li>
                <li>Achievement: Recognized as Real OG in the community.</li>
              </ul>
              <div className="project-footer">
                <span>Role: Real OG</span>
              </div>
            </article>

            <article className="card project-card">
              <div className="project-header">
                <img src={seismicLogo} className="project-logo" alt="Seismic logo" />
                <div className="project-header-text">
                  <span className="pill bot">Community</span>
                  <h3>Seismic</h3>
                </div>
              </div>
              <p className="project-description">
                A Web3 community where I create content and support members, helping build a loyal core user base.
              </p>
              <ul className="project-details">
                <li>Time: 04/2024 – Present — Role: Manitude 5.</li>
                <li>Tasks: Content creator & community support.</li>
              </ul>
              <div className="project-footer">
                <span>Role: Manitude 5</span>
              </div>
            </article>

            <article className="card project-card">
              <div className="project-header">
                <img src={mimbokuLogo} className="project-logo" alt="Mimboku logo" />
                <div className="project-header-text">
                  <span className="pill bot">Community</span>
                  <h3>Mimboku</h3>
                </div>
              </div>
              <p className="project-description">
                A Web3 community where I contributed as an OG, supporting user growth and content creation.
              </p>
              <ul className="project-details">
                <li>Time: 10/2023 – 03/2024 — Role: OG.</li>
                <li>Tasks: Content creator & community support.</li>
              </ul>
              <div className="project-footer">
                <span>Role: OG</span>
              </div>
            </article>


          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <div className="section-header">
            <p className="eyebrow">Experience</p>
            <h2>Career Journey & Experience</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content card">
                <span className="timeline-time">2023 - Present</span>
                <h3>Onchain Moderator • Ambassador • Content Creator</h3>
                <p>
                  Building communities for multiple Web3 projects while creating educational content and helping
                  members understand products and risks in the market.
                </p>
                <ul>
                  <li>Manage communities on Discord/X, handle reports and warn about scam/phishing.</li>
                  <li>Create content (posts, recaps, announcements) so communities stay updated fast and accurately.</li>
                  <li>Work directly with the core team to keep messaging consistent to the community.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content card">
                <span className="timeline-time">Offchain</span>
                <h3>Mechanics Engineer</h3>
                <p>
                  My mechanical engineering background gives me systematic, logical and careful problem-solving
                  skills that I apply to community operations and Web3 risk assessment.
                </p>
                <ul>
                  <li>Formally trained in engineering, processes and safety standards.</li>
                  <li>Bring an engineering mindset into conflict and crisis handling in communities.</li>
                  <li>Combine technical hard skills with communication soft skills to balance logic and emotion.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="section-header">
            <p className="eyebrow">Contact</p>
            <h2>
              Let’s build the next Web3 product together
            </h2>
            <p className="section-description">
              If you need an experienced on-chain Moderator / Ambassador / Content Creator to support your
              community, feel free to reach out through the channels below.
            </p>
          </div>

          <div className="contact-grid">
            <div className="card contact-card">
              <h3>Contact Information</h3>
              <ul className="contact-list">
                <li>
                  <span className="label">Email</span>
                  <a href="mailto:17153054ninh@gmail.com">17153054ninh@gmail.com</a>
                </li>
                <li>
                  <span className="label">Twitter / X</span>
                  <a href="https://twitter.com/NinhNinh99QN" target="_blank" rel="noreferrer">
                    @NinhNinh99QN
                  </a>
                </li>
                <li>
                  <span className="label">Discord</span>
                  <span>@snoopyvn07</span>
                </li>
                <li>
                  <span className="label">EVM Wallet</span>
                  <span>0xC864b17e5B91f53Df6be14F141737B9b29de575a</span>
                </li>
              </ul>
            </div>

            <div className="card contact-card">
              <h3>What I Offer</h3>
              <ul>
                <li>
                  Community & soft skills: Conflict Resolution, Crisis Management, Engagement Facilitation,
                  Relationship Building, Active Listening, Effective Communication, Tone Management.
                </li>
                <li>
                  Web3 skills: EVM, DeFi, Bot Mod, proficient with Discord, Notion, Canva, MEE6, X.
                </li>
                <li>
                  Languages: Vietnamese (Native), English (Reading, Writing).
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Snoopy. All rights reserved.</span>
        <span className="footer-note">Built with React • Optimized for Crypto / Web3</span>
      </footer>
    </div>
  )
}

export default App

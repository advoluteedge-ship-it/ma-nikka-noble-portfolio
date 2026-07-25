const expertise = [
  {
    number: "01",
    title: "Web development",
    text: "Responsive WordPress and HTML websites, landing pages, and front-end experiences built around usability and business goals.",
    tags: ["WordPress", "HTML/CSS", "React", "Shopify"],
  },
  {
    number: "02",
    title: "Search visibility",
    text: "On-page and technical SEO, keyword research, content optimization, and performance tracking that help brands become easier to find.",
    tags: ["SEO", "Ahrefs", "SEMrush", "GSC"],
  },
  {
    number: "03",
    title: "Growth analytics",
    text: "Clear measurement systems for campaigns and customer journeys, from tracking setup through dashboards and decision-ready reporting.",
    tags: ["GA4", "GTM", "Looker Studio", "Meta Ads"],
  },
];

const work = [
  {
    company: "Crown BioScience",
    type: "US Client · Analytics",
    title: "Reliable measurement across the marketing stack",
    text: "Implemented and maintained GA4, Google Search Console, and Google Tag Manager; built Looker Studio dashboards and audited events and conversions for accurate tracking.",
    accent: "amber",
  },
  {
    company: "Dan Gordon Enterprise",
    type: "US Client · Conversion Tracking",
    title: "A clearer view of campaign performance",
    text: "Deployed GA4 and Tag Manager, configured custom events and conversions, and validated data layers so campaign decisions could rest on dependable data.",
    accent: "ink",
  },
  {
    company: "First Power Solar Inc.",
    type: "Digital Marketing · Web & Paid Media",
    title: "A stronger digital foundation for growth",
    text: "Improved the WordPress and HTML website, supported SEO, created landing pages and brand materials, and planned Meta Ads with testing, reporting, and budget allocation.",
    accent: "sand",
  },
];

const projects = [
  {
    title: "Lakbay Luna",
    category: "Travel Website",
    status: "Live Project",
    url: "https://lakbay-luna.web.app/",
    text: "A polished travel-focused web experience created to present destinations and help visitors begin planning their next journey.",
  },
  {
    title: "Horizon Travels",
    category: "Travel Website",
    status: "Live Project",
    url: "https://horizon-travels-21fa9.web.app/",
    text: "A responsive travel brand website with clear service presentation, visual storytelling, and conversion-focused navigation.",
  },
  {
    title: "Advolute Edge",
    category: "Digital Marketing",
    status: "Live Project",
    url: "https://advoluteedge-ca42c.web.app/#process",
    text: "A modern agency website that explains a structured marketing process and presents digital services with a confident visual identity.",
  },
  {
    title: "Kurum Group",
    category: "Corporate Website",
    status: "Live Website",
    url: "https://kurumgroup.com/",
    text: "Website operations and SEO support for a Dubai consultancy group spanning business setup, accounting, marketing, and design services.",
  },
  {
    title: "Business Setup",
    category: "Landing Page",
    status: "Draft",
    url: "https://business-setup-6bf16.web.app",
    text: "A conversion-oriented landing page concept for company formation and business setup services.",
  },
  {
    title: "Golden Visa",
    category: "Landing Page",
    status: "Draft",
    url: "https://golden-visa-4144f.web.app/",
    text: "An informational landing page concept that organizes Golden Visa benefits, eligibility, and enquiry pathways.",
  },
  {
    title: "Cost Calculation",
    category: "Interactive Tool",
    status: "Draft",
    url: "https://cost-calculation-22e39.web.app/",
    text: "An interactive quotation and cost-calculation prototype designed to simplify early-stage client estimates.",
  },
  {
    title: "Solar Energy",
    category: "Industry Website",
    status: "Draft",
    url: "https://solar-energy-f849f.web.app",
    text: "A clean renewable-energy website concept presenting solar solutions, benefits, and customer calls to action.",
  },
];

const experience = [
  {
    dates: "June 2026 — Dec 2026",
    company: "Kurum Group of Companies",
    role: "Digital Marketing Specialist (SEO)",
    summary:
      "Led social content, landing-page optimization, SEO, website maintenance, Zoho workflow integration, and Google and Meta advertising with a focus on cost-efficient performance.",
  },
  {
    dates: "March 2025 — Dec 2025",
    company: "First Power Solar Inc.",
    role: "Digital Marketing Specialist / Operations",
    summary:
      "Built and maintained the company website, delivered SEO updates, managed daily social media and enquiries, created sales materials, prepared reports, and produced initial estimates and quotations.",
  },
  {
    dates: "Oct 2023 — Nov 2024",
    company: "12 Stars International Gaming Solutions Limited",
    role: "Web Developer / SEO",
    summary:
      "Created and optimized websites and landing pages, managed technical and on-page SEO, produced search-focused content, and supported digital campaigns.",
  },
  {
    dates: "Jan 2021 — Sept 2023",
    company: "Mad Gaming Developer",
    role: "App Specialist",
    summary:
      "Built and optimized Android experiences with REST APIs, authentication, QA, crash analytics, localization, and advertising measurement across international markets.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Ma. Nikka Noble, home">
          Ma. Nikka Noble
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#expertise">Expertise</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            Digital Marketing Specialist · WordPress Developer · SEO Specialist
          </p>
          <h1>
            I turn websites, search visibility, and campaign data into{" "}
            <em>measurable growth.</em>
          </h1>
          <p className="hero-intro">
            I combine development, SEO, paid media, and analytics to build
            digital experiences that are useful to people and valuable to
            businesses.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">
              View selected work <span aria-hidden="true">↘</span>
            </a>
            <a
              className="resume-link"
              href="/assets/ma-nikka-noble-resume.pdf"
              download
            >
              Download résumé <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="credibility" aria-label="Core expertise">
            <span className="globe" aria-hidden="true">◎</span>
            <span>GA4</span><i>·</i><span>SEO</span><i>·</i>
            <span>WordPress</span><i>·</i><span>Paid Media</span>
            <span className="cred-arrow" aria-hidden="true">→</span>
          </div>
        </div>

        <div className="portrait-wrap">
          <div className="portrait-circle" />
          <div className="portrait-dots" aria-hidden="true" />
          <div className="portrait-card">
            <img
              src="/assets/ma-nikka-noble.jpg"
              alt="Professional portrait of Ma. Nikka Noble"
            />
          </div>
          <div className="portrait-block" />
          <p className="availability">
            <span /> Based in Mandaluyong City · Open to opportunities
          </p>
        </div>
      </section>

      <section className="statement section-shell">
        <p className="section-kicker">What I bring</p>
        <blockquote>
          “Good marketing connects the creative idea, the technical foundation,
          and the data that proves what works.”
        </blockquote>
        <p>
          My work sits at that intersection—helping teams create clearer,
          faster, more discoverable digital experiences.
        </p>
      </section>

      <section className="work section-shell" id="work">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Selected work</p>
            <h2>Built for real business outcomes.</h2>
          </div>
          <p>
            A selection of client and in-house work across analytics,
            websites, SEO, and paid media.
          </p>
        </div>
        <div className="work-grid">
          {work.map((item, index) => (
            <article className={`work-card ${item.accent}`} key={item.company}>
              <div className="work-index">0{index + 1}</div>
              <p className="work-type">{item.type}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="work-company">{item.company}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects section-shell" id="projects">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Portfolio projects</p>
            <h2>Web experiences across industries.</h2>
          </div>
          <p>
            Live websites and working concepts spanning travel, consulting,
            lead generation, interactive quotations, and renewable energy.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <a
              className="project-card"
              href={project.url}
              target="_blank"
              rel="noreferrer"
              key={project.title}
            >
              <div className="project-topline">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span className={project.status === "Draft" ? "status draft" : "status"}>
                  {project.status}
                </span>
              </div>
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <span className="project-link">Visit project ↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="expertise section-shell" id="expertise">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Expertise</p>
            <h2>One connected digital skill set.</h2>
          </div>
          <p>
            Strategy is stronger when the website, the search plan, and the
            measurement system support one another.
          </p>
        </div>
        <div className="expertise-list">
          {expertise.map((item) => (
            <article key={item.title}>
              <span className="expertise-number">{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <ul aria-label={`${item.title} tools`}>
                {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="experience section-shell" id="experience">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Experience</p>
            <h2>A career built across growth and technology.</h2>
          </div>
          <a
            className="text-link"
            href="/assets/ma-nikka-noble-resume.pdf"
            target="_blank"
          >
            Read full résumé ↗
          </a>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article key={item.company}>
              <p className="dates">{item.dates}</p>
              <div className="timeline-role">
                <h3>{item.company}</h3>
                <p>{item.role}</p>
              </div>
              <p className="timeline-summary">{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="education section-shell">
        <p className="section-kicker">Education & toolkit</p>
        <div className="education-grid">
          <div>
            <h2>Bachelor of Information System</h2>
            <p>Catanduanes State University · 2013–2017</p>
          </div>
          <p>
            GA4 · Google Search Console · Google Tag Manager · Looker Studio ·
            Google Ads · Meta Ads · HubSpot · Zoho CRM · Ahrefs · SEMrush ·
            Screaming Frog · Android Studio · WordPress · Shopify
          </p>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="section-kicker">Let’s work together</p>
        <h2>Looking for someone who can connect marketing and technology?</h2>
        <p>
          I’m open to employer and project opportunities where thoughtful
          digital work can create meaningful growth.
        </p>
        <div className="contact-actions">
          <a className="button button-light" href="mailto:devkainoble@gmail.com">
            devkainoble@gmail.com <span aria-hidden="true">↗</span>
          </a>
          <a className="phone-link" href="tel:+639184438987">
            +63 918 443 8987
          </a>
        </div>
      </section>

      <footer>
        <a className="brand" href="#top">Ma. Nikka Noble</a>
        <p>Digital Marketing · WordPress · SEO</p>
        <p>© 2026 Ma. Nikka Noble</p>
      </footer>
    </main>
  );
}

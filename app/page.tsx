const modules = [
  { icon: "01", title: "Students & Admissions", text: "From applications and admission to classes, guardians, attendance and student history." },
  { icon: "02", title: "Academics & Results", text: "Assessments, marks, grading, report cards, timetables and performance insights." },
  { icon: "03", title: "Fees & Payments", text: "Student balances, receipts, PRNs, payment reconciliation and collection reporting." },
  { icon: "04", title: "School Website", text: "A beautiful school website managed from the same platform, with your own branding and content." },
  { icon: "05", title: "Parents & Teachers", text: "Simple portals that keep teachers productive and parents connected to their children." },
  { icon: "06", title: "School ERP", text: "HR, payroll, finance, inventory, library, boarding, transport, clinic and more when you need it." }
];

const plans = [
  { name: "Free Forever", price: "UGX 0", note: "Essential school management", accent: false },
  { name: "Standard", price: "UGX 10K", note: "Own domain + professional website", accent: false },
  { name: "Pro", price: "UGX 25K", note: "Advanced academics + HR", accent: true },
  { name: "Enterprise", price: "UGX 50K", note: "Complete School ERP", accent: false }
];

const faqs = [
  {
    q: "Is AroSchools really free?",
    a: "Yes. AroSchools will include a Free Forever core for basic school management. New schools also receive 60 days of full access to every available feature."
  },
  {
    q: "Can a school use its own domain?",
    a: "Yes. Custom school domains are included from the Standard package upward and are available during the 60-day full-access trial."
  },
  {
    q: "Does AroSchools manage fees and student results?",
    a: "Yes. The platform is designed to manage student records, attendance, results, fees and manual receipts in the core product, with advanced payment and reconciliation capabilities on higher packages."
  },
  {
    q: "Who is AroSchools designed for?",
    a: "AroSchools is being built for nursery, primary, secondary, vocational and other education institutions, starting with the needs of schools in Uganda and Africa."
  }
];

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AroSchools",
  url: "https://aroschools.com",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  description:
    "A multi-school digital campus SaaS for school websites, student management, academics, fees, portals, HR, finance and school operations.",
  areaServed: ["Uganda", "Africa"],
  creator: {
    "@type": "Organization",
    name: "AROSOFT Innovations Ltd"
  },
  offers: [
    { "@type": "Offer", name: "Free Forever", price: "0", priceCurrency: "UGX" },
    { "@type": "Offer", name: "Standard", price: "10000", priceCurrency: "UGX" },
    { "@type": "Offer", name: "Pro", price: "25000", priceCurrency: "UGX" },
    { "@type": "Offer", name: "Enterprise", price: "50000", priceCurrency: "UGX" }
  ]
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AroSchools",
  url: "https://aroschools.com",
  logo: "https://aroschools.com/icon.svg",
  parentOrganization: {
    "@type": "Organization",
    name: "AROSOFT Innovations Ltd"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a }
  }))
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <header className="nav-wrap">
        <nav className="nav container" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="AroSchools home">
            <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
            <span><b>Aro</b>Schools</span>
          </a>
          <div className="nav-links">
            <a href="#platform">Platform</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>
          <a className="nav-cta" href="#launch">Coming Soon</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Built for modern African schools</div>
            <h1>Your whole school.<br /><em>One simple platform.</em></h1>
            <p className="hero-lead">
              AroSchools brings your school website, students, academics, fees, parents, teachers and operations together — beautifully, securely and without the usual complexity.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#launch">Get ready for launch <span>→</span></a>
              <a className="button button-secondary" href="#platform">See what&apos;s coming</a>
            </div>
            <div className="hero-proof" aria-label="Launch benefits">
              <div><strong>60 days</strong><span>Full access trial</span></div>
              <div><strong>UGX 0</strong><span>Free Forever core</span></div>
              <div><strong>1 platform</strong><span>Website + School ERP</span></div>
            </div>
          </div>

          <div className="product-stage" aria-label="AroSchools product preview">
            <div className="stage-orbit orbit-one" />
            <div className="stage-orbit orbit-two" />
            <div className="dashboard-card">
              <div className="dash-top">
                <div className="mini-brand"><span className="mini-logo">A</span><b>AroSchools</b></div>
                <span className="school-pill">Greenfield School</span>
              </div>
              <div className="dash-body">
                <aside className="dash-sidebar">
                  <span className="side-active">Overview</span><span>Students</span><span>Academics</span><span>Fees</span><span>Website</span>
                </aside>
                <div className="dash-content">
                  <div className="dash-heading"><div><small>Good morning</small><strong>School overview</strong></div><button>New student</button></div>
                  <div className="metric-row">
                    <div><small>Students</small><b>684</b><span>+24 this term</span></div>
                    <div><small>Attendance</small><b>94.8%</b><span>Today</span></div>
                    <div><small>Fees collected</small><b>82%</b><span>This term</span></div>
                  </div>
                  <div className="dash-lower">
                    <div className="chart-card"><div className="chart-title"><b>Fee collection</b><span>Term 2</span></div><div className="bars"><i /><i /><i /><i /><i /><i /><i /></div></div>
                    <div className="activity-card"><b>Today</b><p><span className="dot green" /> 96 students present</p><p><span className="dot blue" /> 18 payments reconciled</p><p><span className="dot amber" /> 4 new applications</p></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="float-card float-student"><span className="avatar">JM</span><div><small>Student portal</small><b>Results published</b></div><i>✓</i></div>
            <div className="float-card float-site"><span className="site-icon">⌂</span><div><small>School website</small><b>Live & connected</b></div></div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-inner">
          <span>One platform for</span><b>Nursery Schools</b><i>•</i><b>Primary Schools</b><i>•</i><b>Secondary Schools</b><i>•</i><b>Vocational Institutions</b>
        </div>
      </section>

      <section className="section" id="platform">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow"><span /> The digital campus</div>
            <h2>Everything a school needs.<br />Nothing it doesn&apos;t.</h2>
            <p>Start simple, then switch on more powerful school operations as your institution grows.</p>
          </div>
          <div className="feature-grid">
            {modules.map((item) => (
              <article className="feature-card" key={item.title}>
                <span className="feature-number">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="feature-link">Included in the platform <b>→</b></span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section website-section">
        <div className="container website-grid">
          <div className="website-copy">
            <div className="eyebrow light"><span /> More than an ERP</div>
            <h2>Your school deserves a website people remember.</h2>
            <p>Upload your logo, school colours, campus photos, programs, awards, news and student life. AroSchools turns it into a professional school website connected to the same platform that runs your school.</p>
            <ul className="check-list">
              <li><span>✓</span> School branding, campus & galleries</li>
              <li><span>✓</span> Admissions, programs, awards & news</li>
              <li><span>✓</span> Custom domain from Standard upward</li>
              <li><span>✓</span> Parent, student & teacher portal links</li>
            </ul>
          </div>
          <div className="website-preview">
            <div className="browser-bar"><i /><i /><i /><span>www.yourschool.ac.ug</span></div>
            <div className="school-site">
              <div className="school-nav"><b>ST. HORIZON</b><span>About&nbsp;&nbsp; Academics&nbsp;&nbsp; Admissions</span></div>
              <div className="school-hero"><div><small>DISCOVER YOUR POTENTIAL</small><h3>A place to learn,<br />lead and belong.</h3><button>Apply for admission</button></div></div>
              <div className="school-stats"><span><b>26+</b> Years</span><span><b>1,200</b> Learners</span><span><b>98%</b> Completion</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section trial-section">
        <div className="container trial-card">
          <div>
            <span className="trial-kicker">60-DAY FULL ACCESS TRIAL</span>
            <h2>Try everything.<br />Keep what your school needs.</h2>
            <p>Every new school gets the complete platform for 60 days. When the trial ends, your core school system remains free forever — or upgrade to keep the advanced tools your team loves.</p>
          </div>
          <div className="trial-visual">
            <div className="trial-ring"><strong>60</strong><span>days</span></div>
            <div className="trial-list"><span>✓ Custom domain</span><span>✓ HR & payroll</span><span>✓ Finance & inventory</span><span>✓ Advanced academics</span></div>
          </div>
        </div>
      </section>

      <section className="section pricing-section" id="pricing">
        <div className="container">
          <div className="section-heading compact">
            <div className="eyebrow"><span /> Simple Ugandan pricing</div>
            <h2>Start free. Grow when you&apos;re ready.</h2>
            <p>No complicated module shopping. Choose the package that matches your school.</p>
          </div>
          <div className="pricing-grid">
            {plans.map((plan) => (
              <article className={`price-card${plan.accent ? " featured" : ""}`} key={plan.name}>
                {plan.accent && <span className="popular">MOST POPULAR</span>}
                <h3>{plan.name}</h3>
                <strong>{plan.price}</strong>
                <span className="per">{plan.name === "Free Forever" ? "forever" : "/ month"}</span>
                <p>{plan.note}</p>
              </article>
            ))}
          </div>
          <p className="pricing-note">Launch pricing shown for planning. New schools will receive 60 days of full platform access.</p>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="container faq-grid">
          <div className="faq-intro"><div className="eyebrow"><span /> Questions</div><h2>Built to be simple from day one.</h2><p>AroSchools is being designed so schools can get online and start managing their operations without needing a technical team.</p></div>
          <div className="faq-list">
            {faqs.map((faq) => <details key={faq.q}><summary>{faq.q}<span>+</span></summary><p>{faq.a}</p></details>)}
          </div>
        </div>
      </section>

      <section className="launch-section" id="launch">
        <div className="container launch-card">
          <div className="launch-badge"><span /> AroSchools is coming</div>
          <h2>The simpler way to run a school is almost here.</h2>
          <p>We&apos;re building AroSchools for schools that want professional technology without enterprise complexity or enterprise pricing.</p>
          <div className="launch-chips"><span>Free Forever core</span><span>60-day full trial</span><span>Website + ERP</span><span>Built for Africa</span></div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <div><a className="brand footer-brand" href="#top"><span className="brand-mark" aria-hidden="true"><i /><i /><i /></span><span><b>Aro</b>Schools</span></a><p>One Platform. Every School.</p></div>
          <div className="footer-meta"><span>School Management Software</span><span>Digital Campus SaaS</span><span>Uganda · Africa</span></div>
          <p className="copyright">© {new Date().getFullYear()} AroSchools. A product by AROSOFT Innovations Ltd.</p>
        </div>
      </footer>
    </main>
  );
}

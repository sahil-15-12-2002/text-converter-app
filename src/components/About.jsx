export default function About() {
  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Instant text transformations with real-time preview and analysis."
    },
    {
      icon: "🎯",
      title: "Precise Operations",
      description: "Advanced text processing including case conversion, extraction, and cleanup."
    },
    {
      icon: "📊",
      title: "Smart Analytics",
      description: "Comprehensive statistics including word frequency, reading time, and text metrics."
    },
    {
      icon: "🔍",
      title: "Find & Replace",
      description: "Powerful search and replace functionality with pattern matching."
    },
    {
      icon: "🎨",
      title: "Beautiful UI",
      description: "Modern, responsive design with dark/light theme support."
    },
    {
      icon: "💾",
      title: "Export Options",
      description: "Download your processed text and share results easily."
    },
    {
      icon: "🔊",
      title: "Text-to-Speech",
      description: "Listen to your text with built-in speech synthesis."
    },
    {
      icon: "📱",
      title: "Mobile Friendly",
      description: "Fully responsive design that works perfectly on all devices."
    }
  ];

  const stats = [
    { number: "15+", label: "Text Operations" },
    { number: "8", label: "Statistics Metrics" },
    { number: "100%", label: "Client-Side" },
    { number: "∞", label: "Transformations" }
  ];

 return (
    <div className="about-page">
      <div className="hero-card">
        <div className="hero-icon">🚀</div>
        <h1 className="hero-title">Advanced Text Transformer</h1>
        <p className="hero-subtitle">
          The most powerful and beautiful text processing tool on the web.
          Transform, analyze, and enhance your text with professional-grade features.
        </p>
        <div className="badges-container">
          <div className="badge badge-primary">⚡ Real-time Processing</div>
          <div className="badge badge-success">🔒 Privacy First</div>
          <div className="badge badge-info">📱 Mobile Ready</div>
          <div className="badge badge-warning">🎨 Modern UI</div>
        </div>
      </div>

      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-name">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-heading">{feature.title}</h3>
            <p className="feature-text">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="how-it-works-card">
        <h2 className="section-heading">🔧 How It Works</h2>
        <div className="steps-grid">
          <div className="step-item">
            <div className="step-number">1</div>
            <h4 className="step-title">Paste Your Text</h4>
            <p className="step-desc">Start by entering or pasting your text into the input area.</p>
          </div>
          <div className="step-item">
            <div className="step-number">2</div>
            <h4 className="step-title">Choose Operation</h4>
            <p className="step-desc">Select from 15+ powerful text transformation options.</p>
          </div>
          <div className="step-item">
            <div className="step-number">3</div>
            <h4 className="step-title">Get Results</h4>
            <p className="step-desc">View instant results with comprehensive analytics.</p>
          </div>
        </div>
      </div>

      <div className="tech-card">
        <h3 className="section-heading">⚙️ Built With Modern Technologies</h3>
        <div className="tech-badges">
          <span className="badge badge-primary">React 18</span>
          <span className="badge badge-success">Vite</span>
          <span className="badge badge-info">CSS3</span>
          <span className="badge badge-warning">JavaScript ES6+</span>
          <span className="badge badge-secondary">Web APIs</span>
          <span className="badge badge-danger">Responsive Design</span>
        </div>
      </div>

      <div className="cta-card">
        <h3 className="cta-title">Ready to Transform Your Text?</h3>
        <p className="cta-subtitle">Experience the power of professional text processing tools.</p>
        <a href="/" className="btn btn-primary btn-lg">
          <span>🚀</span>
          <span>Start Transforming</span>
        </a>
      </div>
    </div>
  );
}

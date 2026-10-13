import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('Roads')
  const [location, setLocation] = useState('')
  const [citizenName, setCitizenName] = useState('')

  async function handleSubmit(event) {
  event.preventDefault()

  try {
    const response = await fetch(
      https://civicfix-backend-1-1yv1.onrender.com/api/complaints
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
          category,
          location,
          citizenName,
        }),
      }
    )

    if (!response.ok) {
      throw new Error('Could not submit complaint')
    }

    alert('Complaint submitted successfully!')

    setTitle('')
    setDescription('')
    setCategory('Roads')
    setLocation('')
    setCitizenName('')
  } catch (error) {
    alert('Unable to submit complaint. Please check the backend and try again.')
    console.error(error)
  }
}
  return (
    <div className="app">
      <header className="navbar">
        <div className="brand">Civic<span>fix</span></div>
        <nav>
          <a href="#home">Home</a>
          <a href="#report">Report a Problem</a>
          <a href="#about">About</a>
        </nav>
        <a className="nav-button" href="#report">Get Started</a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">YOUR CITY. YOUR VOICE.</p>
            <h1>Let's make our city <span>better together.</span></h1>
            <p className="hero-text">
              Report civic issues in your neighbourhood and help make your
              community cleaner, safer, and better for everyone.
            </p>
            <a className="primary-button" href="#report">Report an Issue →</a>
            <div className="hero-note">Simple reporting. Stronger communities.</div>
          </div>

          <div className="hero-card">
            <div className="city-icon">🏙️</div>
            <h2>A better city starts with you.</h2>
            <p>Streetlights · Roads · Waste · Water</p>
            <div className="mini-status">
              <span className="status-dot"></span>
              Every report can make a difference
            </div>
          </div>
        </section>

        <section className="features" id="about">
          <div>
            <span className="feature-icon">📍</span>
            <h3>Report Local Issues</h3>
            <p>Tell us about problems in your neighbourhood.</p>
          </div>
          <div>
            <span className="feature-icon">📝</span>
            <h3>Share Details</h3>
            <p>Provide the location and details of the issue.</p>
          </div>
          <div>
            <span className="feature-icon">🤝</span>
            <h3>Build Better Communities</h3>
            <p>Help bring attention to problems that matter.</p>
          </div>
        </section>

        <section className="report-section" id="report">
          <div className="section-heading">
            <p className="eyebrow">MAKE A DIFFERENCE</p>
            <h2>Report a civic issue</h2>
            <p>Fill in the details below to report a problem in your area.</p>
          </div>

          <form className="complaint-form" onSubmit={handleSubmit}>
            <label>
              Your Name
              <input
                type="text"
                placeholder="Enter your name"
                value={citizenName}
                onChange={(event) => setCitizenName(event.target.value)}
                required
              />
            </label>

            <label>
              Complaint Title
              <input
                type="text"
                placeholder="e.g. Streetlight not working"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required
              />
            </label>

            <label>
              Category
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                <option>Roads</option>
                <option>Streetlights</option>
                <option>Water Supply</option>
                <option>Waste Management</option>
                <option>Drainage</option>
                <option>Other</option>
              </select>
            </label>

            <label>
              Location
              <input
                type="text"
                placeholder="Enter the area or street"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                required
              />
            </label>

            <label>
              Describe the Problem
              <textarea
                placeholder="Explain the issue in detail..."
                rows="5"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                required
              />
            </label>

            <button className="primary-button submit-button" type="submit">
              Submit Complaint →
            </button>
          </form>
        </section>
      </main>

      <footer>
        <div className="brand">Civic<span>fix</span></div>
        <p>Working together for cleaner, safer communities.</p>
        <p>© 2026 Civicfix. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
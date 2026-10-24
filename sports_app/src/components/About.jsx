
import { Link } from "react-router-dom";
import Header from "./Header";
import "./about.css";

function About() {
  



  return (
    <>
      <Header />

      <div className="about-container">
        {/* Hero Section */}
        <section className="about-header">
          <span className="about-badge">🏆 Welcome to Our Academy</span>
          <h1>About Our Sports Academy</h1>
          <p>
            Building Champions, Inspiring Athletes, and Creating a
            Healthier Future.
          </p>
        </section>

        {/* Who We Are */}
        <section className="about-card who-card">
          <div className="card-icon">🏅</div>
          <h2>Who We Are</h2>

          <p>
            Welcome to our Sports Academy Management System, a web-based
            application designed to make sports academy management easier,
            smarter, and more efficient. Our platform brings students,
            coaches, and administrators together in one place to support
            sports training and academy activities.
          </p>

          <p>
            Our goal is to provide a convenient platform where users can
            explore sports courses, learn about the academy, and access
            relevant information. The system also helps administrators
            organise member records, courses, admissions, and other
            academy-related activities.
          </p>
        </section>

        {/* Mission and Vision */}
        <div className="about-grid">
          <section className="about-card mission-card">
            <div className="card-icon">🎯</div>
            <h2>Our Mission</h2>
            <p>
              Our mission is to encourage sports participation, promote
              physical fitness, and make academy management more organised
              through technology. We aim to support teamwork, discipline,
              confidence, and continuous improvement among aspiring athletes.
            </p>
          </section>

          <section className="about-card vision-card">
            <div className="card-icon">🚀</div>
            <h2>Our Vision</h2>
            <p>
              Our vision is to create a modern and accessible sports
              environment where every aspiring athlete gets an opportunity
              to learn, improve their skills, and work towards their goals.
            </p>
          </section>
        </div>

        {/* Key Features */}
        <section className="about-card features-card">
          <div className="card-icon">⭐</div>
          <h2>Our Key Features</h2>
          <p className="section-subtitle">
            Everything you need to manage sports academy activities.
          </p>

          <div className="features-grid">
            <div className="feature-box">
              <span>👥</span>
              <h3>Member Management</h3>
              <p>
                Organise member information and account details.
              </p>
            </div>

            <div className="feature-box">
              <span>⚽</span>
              <h3>Course Management</h3>
              <p>
                Display sports courses and training information.
              </p>
            </div>

            <div className="feature-box">
              <span>📝</span>
              <h3>Admission Management</h3>
              <p>
                Maintain academy admission records.
              </p>
            </div>

            <div className="feature-box">
              <span>📊</span>
              <h3>Admin Dashboard</h3>
              <p>
                Manage administrative tasks and academy activities.
              </p>
            </div>

            <div className="feature-box">
              <span>🧑‍🏫</span>
              <h3>Coach Panel</h3>
              <p>
                Provide a dedicated interface for coaches.
              </p>
            </div>

            <div className="feature-box">
              <span>💬</span>
              <h3>Contact & Feedback</h3>
              <p>
                Communicate with the academy and share feedback.
              </p>
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className="about-card technology-card">
          <div className="card-icon">💻</div>
          <h2>Technology We Use</h2>
          <p>
            This project is developed using the MERN Stack, a modern
            technology stack for building dynamic web applications.
          </p>

          <div className="tech-grid">
            <div className="tech-box mongo">
              <h3>🍃 MongoDB</h3>
              <p>Stores application data.</p>
            </div>

            <div className="tech-box express">
              <h3>⚙️ Express.js</h3>
              <p>Handles backend APIs and requests.</p>
            </div>

            <div className="tech-box react">
              <h3>⚛️ React.js</h3>
              <p>Builds the interactive user interface.</p>
            </div>

            <div className="tech-box node">
              <h3>🟢 Node.js</h3>
              <p>Runs the backend JavaScript application.</p>
            </div>
          </div>
        </section>

        {/* Footer / Call to Action */}
        <section className="about-footer">
          <div className="footer-icon">🏆</div>
          <h2>Join Our Sports Community</h2>
          <p>
            Discover your potential, develop your skills, and take
            the next step in your sports journey with us.
          </p>

          <Link to="/" className="home-link">
            🏠 Back to Home
          </Link>
        </section>
      </div>
    </>
  );
}

export default About;

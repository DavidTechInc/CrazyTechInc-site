
import React from 'react';
import './Home.css';

function Home() {
  return (
    <section className="home-section" data-aos="fade-up">
      <div className="home-content">
        <h1 className="home-title">Welcome to my WhatsApp bot site</h1>
        <p className="home-description">
          Passionate about automation and WhatsApp, I share here my best ready-to-use bot scripts.
        </p>
        <a href="/scripts" className="home-button">
          Explore my scripts
        </a>
      </div>
    </section>
  );
}

export default Home;
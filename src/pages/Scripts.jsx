
import React, { useEffect, useState } from 'react';
import ScriptCard from '../components/ScriptCard';
import Loader from '../components/Loader';
import './Scripts.css';

function Scripts() {
  const [scripts, setScripts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/scripts.json')
      .then(response => response.json())
      .then(data => {
        setScripts(data);
        setLoading(false);
      })
      .catch(error => console.error('Erreur chargement scripts:', error));
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="scripts-section">
      <h2 className="scripts-title" data-aos="fade-down">My WhatsApp Scripts</h2>
      <div className="scripts-grid">
        {scripts.map((script, index) => (
          <ScriptCard key={index} script={script} />
        ))}
      </div>
    </section>
  );
}

export default Scripts;

import React from 'react';
import './ScriptCard.css';

function ScriptCard({ script }) {
  return (
    <div className="script-card" data-aos="fade-up">
      <h3 className="script-name">{script.name}</h3>
      <p className="script-description">{script.description}</p>
      <a href={script.download} target="_blank" rel="noopener noreferrer" className="script-button">
        Télécharger
      </a>
    </div>
  );
}

export default ScriptCard;
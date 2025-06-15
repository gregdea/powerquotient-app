import React, { useState } from 'react';
import AthleteForm from '../components/AthleteForm';
import PQGauge from '../components/PQGauge';
import PQChart from '../components/PQChart';
import ExportButtons from '../components/ExportButtons';

export default function Home() {
  const [athletes, setAthletes] = useState([]);
  const [lastScore, setLastScore] = useState(null);
  const [lastPain, setLastPain] = useState(false);
  const [tier, setTier] = useState('Coach');

  const addAthlete = (athlete) => {
    setLastScore(athlete.score);
    setLastPain(athlete.pain);
    if (tier !== 'Starter') setAthletes([...athletes, athlete]);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>🚀 Power Quotient App</h1>
      <label>Tier:
        <select value={tier} onChange={e => setTier(e.target.value)}>
          <option>Starter</option>
          <option>Coach</option>
          <option>Elite</option>
        </select>
      </label>
      <AthleteForm onAdd={addAthlete} />
      {lastScore !== null && (
        <div style={{ marginTop: '2rem' }}>
          <h2>PQ Score: {lastScore} {lastPain && '⚕️*'}</h2>
          <PQGauge score={lastScore} />
        </div>
      )}
      {tier !== 'Starter' && <PQChart athletes={athletes} />}
      {tier === 'Elite' && <ExportButtons athletes={athletes} />}
    </div>
  );
}

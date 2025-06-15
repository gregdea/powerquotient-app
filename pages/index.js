import React, { useState } from 'react';
import AthleteForm from '../components/AthleteForm';
import PQChart from '../components/PQChart';
import ExportButtons from '../components/ExportButtons';

export default function Home() {
  const [athletes, setAthletes] = useState([]);
  const [tier, setTier] = useState('Coach');

  const addAthlete = (athlete) => {
    setAthletes([...athletes, athlete]);
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
      {tier !== 'Starter' && <PQChart athletes={athletes} />}
      {tier === 'Elite' && <ExportButtons athletes={athletes} />}
    </div>
  );
}

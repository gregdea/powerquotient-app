import React, { useState } from 'react';

export default function AthleteForm({ onAdd }) {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');
  const [pain, setPain] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const athlete = {
      name,
      score: Number(score),
      pain,
      timestamp: new Date().toISOString()
    };
    onAdd(athlete);
    setName('');
    setScore('');
    setPain(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
      <h2>Add Athlete</h2>
      <input
        type="text"
        placeholder="Name"
        required
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="PQ Score (0–100)"
        required
        value={score}
        onChange={e => setScore(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={pain}
          onChange={e => setPain(e.target.checked)}
        />
        Pain or Injury?
      </label>
      <button type="submit">Add</button>
    </form>
  );
}
